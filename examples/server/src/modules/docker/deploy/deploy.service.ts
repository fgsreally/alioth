import { DeployModel } from '../../../models/deploy'
import { DockerService } from '../docker/docker.service'

@Injectable()
export class DeployService {
  constructor(protected dockerService: DockerService) {

  }

  async find(id: string) {
    const deploy = await DeployModel.findById(id)
    if (!deploy)
      throw new BadRequestException('')

    return deploy
  }

  async remove(id: string) {
    const deploy = await this.find(id)
    await this.dockerService.kill(deploy.id)
    await deploy.deleteOne()
  }
}
