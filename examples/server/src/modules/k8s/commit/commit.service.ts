import { BranchDTO } from '../../../models/branch'
import { CommitDTO, CommitModel } from '../../../models/commit'
import { DeployModel } from '../../../models/deploy'
import { ProjectDTO } from '../../../models/project'
import { K8sService } from '../k8s/k8s.service'

@Injectable()
export class CommitService {
  constructor(
    protected K8S: K8sService,
  ) {}

  async init(project: string) {
    await CommitModel.create({
      project,
      info: 'first commit',
      image: 'alioth-nodejs',
    })
  }

  async find(id: string) {
    const commit = await CommitModel.findById(id).populate('project')

    if (!commit)
      throw new BadRequestException('')
    return commit
  }

  async commit(branch: BranchDTO, info: string) {
    const newCommit = await CommitModel.create({
      commit: branch.commit,
      project: (branch.commit as CommitDTO).project,
      info,
      files: branch.files,
      dependences: branch.dependences,
      status: 'loading',

    })
    const image = await this.K8S.commitContainer(branch.id, (branch.project as ProjectDTO).namespace)
    newCommit.image = image
    newCommit.status = 'finish'

    await newCommit.save()
  }

  async deploy(commitId: string, info: string) {
    const commit = await this.find(commitId)
    const newDeploy = await DeployModel.create({
      status: 'loading', commit, project: commit.project, info,
    })
    const { address, id } = await this.K8S.createProd((commit.project as ProjectDTO).namespace, commit.image)
    newDeploy.id = id
    newDeploy.address = address
    newDeploy.status = 'running'
    await newDeploy.save()
  }
}
