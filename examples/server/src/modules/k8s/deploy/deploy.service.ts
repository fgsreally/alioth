import { DeployModel } from '../../../models/deploy'
import { ProjectDTO } from '../../../models/project'
import { K8sService } from '../k8s/k8s.service'

@Injectable()
export class DeployService {
  constructor(protected K8S: K8sService) {

  }

  async find(id: string) {
    const deploy = await DeployModel.findById(id).populate('project')
    if (!deploy)
      throw new BadRequestException('')

    return deploy
  }

  async remove(id: string) {
    const deploy = await this.find(id)
    deploy.status = 'destroying'
    await deploy.save()
    await this.K8S.killProd((deploy.project as ProjectDTO).namespace.toString(), deploy.id)
    await deploy.deleteOne()
  }
}
