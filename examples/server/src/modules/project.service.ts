import { Injectable } from 'phecda-server'
import { AppsV1Api, CoreV1Api, KubeConfig } from '@kubernetes/client-node'
import Docker from 'dockerode'
import { IsString } from '../utils'
import { DbModule } from './db.module'
const docker = new Docker()

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
  constructor(protected db: DbModule) {
  }

  async create(namespace: string, project: string) {
    const collection = this.db.db.collection('project')

    const projects = await collection.find({ namespace }).toArray()
    if (projects.find(item => item.project === project))
      throw new BadRequestException('has been created')

    if (process.env.K8S)
      await this.createNamespaceDeployment(namespace, project, !projects.length)

    else
      await this.createContainer(namespace, project)

    await this.db.conn.db(namespace).collection(project).createIndex({ file: 1 }, { unique: true })

    await collection.insertOne({ namespace, project })
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

    const kc = new KubeConfig()
    kc.loadFromDefault()

    if (init) {
      await kc.makeApiClient(CoreV1Api).createNamespace({
        metadata: {
          name: namespace,
        },
      })
    }
    const appsV1Api = kc.makeApiClient(AppsV1Api)

    await appsV1Api.createNamespacedDeployment(namespace, deployment)
  }

  async createContainer(namespace: string, project: string) {
    const container = await docker.createContainer({
      Image: 'alioth-nodejs', // 这里使用你的镜像名称
      name: `${namespace}-${project}`,
      Env: [`DB_URI=${process.env.MONGO_URI!}`, `DB_NAME=${namespace}`, `DB_COLLECTION=${project}`],

      HostConfig: {
        // ExtraHosts: ['host.docker.internal:host-gateway'],
        // NetworkMode: 'host', // 连接到mongo-network网络

        PortBindings: {
          '8000/tcp': [{ HostPort: '8000' }],
        },
      },
    })
    await container.start()
  }

  async updateCode({ user, project, path, code }: CodeVO) {
    if (!await this.db.db.collection('project').findOne({ namespace: user, project }))
      throw new BadRequestException('project should be created before')
    const collection = this.db.conn.db(user).collection(project)

    if (code === '') {
      collection.deleteOne({ path })
    }

    else {
      collection.updateOne({ path }, {
        $set: { code, path },
      }, { upsert: true })
    }
  }
}
