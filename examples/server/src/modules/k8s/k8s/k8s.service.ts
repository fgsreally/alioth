import Docker from 'dockerode'
import { nanoid } from 'nanoid'
import { AppsV1Api, AutoscalingV1Api, CoreV1Api, KubeConfig, NetworkingV1Api } from '@kubernetes/client-node'

export class K8sService {
  protected makeCoreApi() {
    const kc = new KubeConfig()
    kc.loadFromDefault()

    return kc.makeApiClient(CoreV1Api)
  }

  protected makeAppApi() {
    const kc = new KubeConfig()
    kc.loadFromDefault()

    return kc.makeApiClient(AppsV1Api)
  }

  protected makeNetApi() {
    const kc = new KubeConfig()
    kc.loadFromDefault()

    return kc.makeApiClient(NetworkingV1Api)
  }

  protected makeAutoScaleApi() {
    const kc = new KubeConfig()
    kc.loadFromDefault()

    return kc.makeApiClient(AutoscalingV1Api)
  }

  async createDev(namespace: string, image: string, env: Record<string, string>) {
    const id = nanoid()
    const podName = `pod-${id}`
    const serviceName = `service-${id}`
    const ingressName = `ingress-${id}`
    const host = `${id}.dev.example.com`

    const pod = {
      metadata: {
        name: podName,
        labels: { app: podName },
      },
      spec: {
        containers: [{
          name: podName,
          image,
          resources: {
            limits: {
              memory: '128Mi',
              cpu: '250m',
            },
            requests: {
              memory: '64Mi',
              cpu: '100m',
            },
          },
          env: Object.entries(env).map(([name, value]) => ({
            name, value,
          })),
        }],
      },
    }

    const service = {
      metadata: {
        name: serviceName,
      },
      spec: {
        selector: { app: podName },
        ports: [{
          protocol: 'TCP',
          port: 80,
          targetPort: 80,
        }],
      },
    }

    const ingress = {
      metadata: {
        name: ingressName,
        annotations: {
          'nginx.ingress.kubernetes.io/rewrite-target': '/',
        },
      },
      spec: {
        rules: [{
          host,
          http: {
            paths: [{
              path: '/',
              pathType: 'Prefix',
              backend: {
                service: {
                  name: serviceName,
                  port: {
                    number: 80,
                  },
                },
              },
            }],
          },
        }],
      },
    }

    await this.makeCoreApi().createNamespacedPod(namespace, pod)
    await this.makeCoreApi().createNamespacedService(namespace, service)
    await this.makeNetApi().createNamespacedIngress(namespace, ingress)

    return {
      id,
      address: `http://${host}`,
    }
  }

  async createProd(namespace: string, image: string, env: Record<string, string>) {
    const id = nanoid()
    const deploymentName = `deployment-${id}`
    const serviceName = `service-${id}`
    const ingressName = `ingress-${id}`
    const host = `${id}.example.com`

    const deployment = {
      metadata: {
        name: deploymentName,
        labels: { app: deploymentName },
      },
      spec: {
        replicas: 1,
        selector: {
          matchLabels: { app: deploymentName },
        },
        template: {
          metadata: {
            labels: { app: deploymentName },
          },
          spec: {
            containers: [{
              name: deploymentName,
              image,
              resources: {
                limits: {
                  memory: '256Mi',
                  cpu: '500m',
                },
                requests: {
                  memory: '128Mi',
                  cpu: '250m',
                },
              },
              env: Object.entries(env).map(([name, value]) => ({
                name, value,
              })),
            }],
          },
        },
      },
    }

    const service = {
      metadata: {
        name: serviceName,
      },
      spec: {
        selector: { app: deploymentName },
        ports: [{
          protocol: 'TCP',
          port: 80,
          targetPort: 80,
        }],
      },
    }

    const ingress = {
      metadata: {
        name: ingressName,
        annotations: {
          'nginx.ingress.kubernetes.io/rewrite-target': '/',
        },
      },
      spec: {
        rules: [{
          host,
          http: {
            paths: [{
              path: '/',
              pathType: 'Prefix',
              backend: {
                service: {
                  name: serviceName,
                  port: {
                    number: 80,
                  },
                },
              },
            }],
          },
        }],
      },
    }

    const hpa = {
      metadata: {
        name: `hpa-${deploymentName}`,
      },
      spec: {
        scaleTargetRef: {
          apiVersion: 'apps/v1',
          kind: 'Deployment',
          name: deploymentName,
        },
        minReplicas: 1,
        maxReplicas: 5,
        metrics: [{
          type: 'Resource',
          resource: {
            name: 'cpu',
            targetAverageUtilization: 50,
          },
        }],
      },
    }

    await this.makeAppApi().createNamespacedDeployment(namespace, deployment)
    await this.makeCoreApi().createNamespacedService(namespace, service)
    await this.makeNetApi().createNamespacedIngress(namespace, ingress)
    await this.makeAutoScaleApi().createNamespacedHorizontalPodAutoscaler(namespace, hpa)

    return {
      id,
      address: `http://${host}`,
    }
  }

  async killDev(namespace: string, id: string) {
    await this.makeNetApi().deleteNamespacedIngress(`ingress-${id}`, namespace)
    await this.makeCoreApi().deleteNamespacedService(`service-${id}`, namespace)
    await this.makeCoreApi().deleteNamespacedPod(`pod-${id}`, namespace)
  }

  async killProd(namespace: string, id: string) {
    await this.makeNetApi().deleteNamespacedIngress(`ingress-${id}`, namespace)
    await this.makeCoreApi().deleteNamespacedService(`service-${id}`, namespace)
    await this.makeAppApi().deleteNamespacedDeployment(`deployment-${id}`, namespace)
    await this.makeAutoScaleApi().deleteNamespacedHorizontalPodAutoscaler(`hpa-${id}`, namespace)
  }

  protected async getPodInfo(id: string, namespace: string) {
    const podResponse = await this.makeCoreApi().readNamespacedPod(`pod-${id}`, namespace)
    const nodeName = podResponse.body.spec.nodeName

    const nodeResponse = await this.makeCoreApi().readNode(nodeName)
    const addresses = nodeResponse.body.status.addresses

    const nodeIp = addresses.find(address => address.type === 'InternalIP').address

    const containers = podResponse.body.spec.containers

    return { nodeIp, containerId: containers[0].name.replace('docker://', '') }
  }

  async commitContainer(id: string, namespace: string) {
    const { nodeIp, containerId } = await this.getPodInfo(id, namespace)
    const docker = new Docker({
      host: `http://${nodeIp}`,
      port: 2375,
    })

    const imageId = nanoid()

    await docker.getContainer(containerId).commit({
      repo: imageId,
    })

    const image = docker.getImage(imageId)

    const stream = await image.push({})

    await new Promise((resolve, reject) => {
      stream.on('end', resolve)
      stream.on('error', reject)
    })

    return imageId
  }
}
