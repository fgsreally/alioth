import { BranchDTO } from '../../../models/branch'
import { CommitDTO, CommitModel } from '../../../models/commit'
import { DeployModel } from '../../../models/deploy'
import { DockerService } from '../k8s/k8s.service'

@Injectable()
export class CommitService {
  constructor(
    protected dockerService: DockerService,
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
    const image = await this.dockerService.commitContainer(branch.id)

    await CommitModel.create({
      commit: branch.commit,
      project: (branch.commit as CommitDTO).project,
      info,
      files: branch.files,
      dependences: branch.dependences,
      image,
    })
  }

  async deploy(commitId: string, info: string) {
    const commit = await this.find(commitId)
    const { port, id } = await this.dockerService.createProd(commit.image)

    return DeployModel.create({
      port, commit, project: commit.project, id, info,
    })
  }
}
