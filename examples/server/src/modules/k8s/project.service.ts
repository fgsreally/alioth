import { Injectable } from 'phecda-server'
import { AppsV1Api, CoreV1Api, Exec, KubeConfig } from '@kubernetes/client-node'
import Docker from 'dockerode'
import { DbModule } from 'alioth-cloud-sdk'
import { IsString } from '../../utils'
const docker = new Docker()
const kc = new KubeConfig()
kc.loadFromDefault()
export class CodeVO {
  @IsString
  user: string

  @IsString
  project: string

  @IsString
  path: string

  @IsString
  code: string
}

@Injectable()
export class ProjectService {
  kc = kc
  kcCore = kc.makeApiClient(CoreV1Api)
  kcApp = kc.makeApiClient(AppsV1Api)
  kcExec = new Exec(kc)

  constructor(protected db: DbModule) {
  }

  async create(namespace: string, project: string) {
    const collection = this.db.collection('projects')

    const projects = await collection.find({ namespace }).toArray()
    if (projects.find(item => item.project === project))
      throw new BadRequestException('has been created')

    if (process.env.K8S)
      await this.createNamespaceDeployment(namespace, project, !projects.length)

    else
      await this.createContainer(namespace, project)

    // await this.db.conn.db(namespace).collection(project).createIndex({ file: 1 }, { unique: true })

    await collection.insertOne({ namespace, project })

    await this.db.conn.db(namespace).admin().command({
      createUser: 'myUsername',
      pwd: 'myPassword',
      roles: [{ role: 'readWrite', db: project }],
    })
  }

  async createNamespaceDeployment(namespace: string, project: string, init: boolean) {
    const labels = { name: project }

    const spec = {
      replicas: 1,
      selector: {
        matchLabels: labels,
      },
      template: {
        metadata: { labels },
        spec: {
          terminationGracePeriodSeconds: 10,
          automountServiceAccountToken: false,
          enableServiceLinks: false,
          containers: [
            {
              image: 'alioth-nodejs',
              imagePullPolicy: 'IfNotPresent',
              // command: ['sh', '/app/start.sh'],
              name: project,
              env: [
                { name: 'PORT', value: '8000' },

              ],
              ports: [
                { containerPort: 8000, name: 'http' },
                // { containerPort: 9000, name: 'storage' },
              ],
              resources: {
                limits: {
                  'cpu': '500m',
                  'memory': '1024Mi',
                  'ephemeral-storage': '4Gi',
                },
                requests: {
                  'cpu': '250m',
                  'memory': '64Mi',
                  'ephemeral-storage': '64Mi',
                },
              },
              volumeMounts: [
                {
                  name: 'app',
                  mountPath: '/app',
                },
              ],

              securityContext: {
                allowPrivilegeEscalation: false,
                readOnlyRootFilesystem: false,
                privileged: false,
              },
            },
          ],
          // initContainers: [
          //   {
          //     name: 'init',
          //     image: 'alioth-nodejs-init',
          //     imagePullPolicy: 'IfNotPresent',
          //     command: ['sh', '/app/init.sh'],
          //     volumeMounts: [
          //       {
          //         name: 'app',
          //         mountPath: '/tmp/app',
          //       },
          //     ],
          //     resources: {
          //       limits: {
          //         'cpu': '1000m',
          //         'memory': '1024Mi',
          //         'ephemeral-storage': '4Gi',
          //       },
          //       requests: {
          //         'cpu': '5m',
          //         'memory': '32Mi',
          //         'ephemeral-storage': '64Mi',
          //       },
          //     },
          //     securityContext: {
          //       allowPrivilegeEscalation: false,
          //       // readOnlyRootFilesystem: true,
          //       privileged: false,
          //     },
          //   },
          // ],
          volumes: [
            {
              name: 'app',
              emptyDir: {
                sizeLimit: '4Gi',
              },
            },
          ],
        },
      },
    }
    const deployment = {
      apiVersion: 'apps/v1',
      kind: 'Deployment',
      metadata: {
        name: project,
        namespace, // 替换为你的命名空间
      },
      spec,

    }

    if (init) {
      await this.kcCore.createNamespace({
        metadata: {
          name: namespace,
        },
      })
    }

    await this.kcApp.createNamespacedDeployment(namespace, deployment)
  }

  async createContainer(namespace: string, project: string) {
    const container = await docker.createContainer({
      Image: 'alioth-nodejs-dev', // 这里使用你的镜像名称
      name: `${namespace}-${project}`,
      Env: [`DB_URI=${process.env.MONGO_URI!}`, `DB_NAME=${namespace}`, `PROJECT_COLLECTION=${project}`],

      HostConfig: {
        // ExtraHosts: ['host.docker.internal:host-gateway'],
        // NetworkMode: 'host', // 连接到mongo-network网络

        PortBindings: {
          '8000/tcp': [{ HostPort: 0 }],
          '8001/tcp': [{ HostPort: 0 }],

        },
      },
    })
    await container.start()
    const data = await container.inspect()
    const httpPort = data.NetworkSettings.Ports['8000/tcp'][0].HostPort
    const wsPort = data.NetworkSettings.Ports['8001/tcp'][0].HostPort
    await this.db.collection('projects').insertOne({
      namespace,
      project,
      port: {
        http: httpPort,
        ws: wsPort,
      },
    })
  }

  async commitContainer(namespace: string, project: string) {
    const pods = await this.kcCore.listNamespacedPod(namespace)
    const pod = pods.body.items.find(item => item.metadata.ownerReferences[0].name === project)
    if (!pod)
      throw new BadRequestException(`pod "${project}" in "${namespace}" doesn't exist`)
    const podName = pod.metadata.name
    const status = await this.kcCore.readNamespacedPodStatus(podName, namespace)

    const { containerID, image } = status.body.status.containerStatuses[0]
    await this.kcExec.exec(
      namespace,
      podName,
      '/bin/bash',
      ['-c', `docker commit ${containerID!} ${project}:${image.split(':')[1] + 1}`, '.'],
      process.stdout,
      process.stderr,
      process.stdin,
      true,
    )
  }

  // async updateCode({ user, project, path, code }: CodeVO) {
  //   if (!await this.db.db.collection('project').findOne({ namespace: user, project }))
  //     throw new BadRequestException('project should be created before')
  //   const collection = this.db.conn.db(user).collection(project)

  //   if (code === '') {
  //     collection.deleteOne({ path })
  //   }

  //   else {
  //     collection.updateOne({ path }, {
  //       $set: { code, path },
  //     }, { upsert: true })
  //   }
  // }
}
