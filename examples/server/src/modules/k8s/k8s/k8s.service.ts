import Docker from 'dockerode'
import { nanoid } from 'nanoid'
import { CoreV1Api, KubeConfig } from '@kubernetes/client-node'
const docker = new Docker()

export class DockerService {
  async find(id: string) {
    const container = await docker.getContainer(id)
    if (!container)
      throw new BadRequestException('container doesn\'t exist')
    return container
  }

  async createDev(image: string, env?: string[]) {
    const kc = new KubeConfig()
    kc.loadFromDefault()

    const k8sApi = kc.makeApiClient(CoreV1Api)

    const ret = await k8sApi.createNamespacedPod('default', pod as any)

    const ip = ret.body.status.hostIP
    const ports = ret.body.status.hostPorts
    return { port, id: container.id }
  }

  async createProd(image: string, env?: string[]) {
    const container = await docker.createContainer({
      Image: image,

      Env: [`DB_URI=${process.env.MONGO_URI!}`, ...env],
      HostConfig: {

        PortBindings: {
          '8000/tcp': [{ HostPort: 0 }],

        },
      },
    })

    await container.start()
    const data = await container.inspect()
    const port = data.NetworkSettings.Ports['8000/tcp'][0].HostPort
    return { port, id: container.id }
  }

  async kill(id: string) {
    const container = await this.find(id)

    await container.kill()
  }

  async stop(id: string) {
    const container = await this.find(id)

    await container.stop()
  }

  async restart(id: string) {
    const container = await this.find(id)

    await container.restart()
  }

  async commitContainer(id: string) {
    const container = await this.find(id)
    const image = nanoid()
    await container.commit({
      repo: image,
    })

    return image
  }
}
