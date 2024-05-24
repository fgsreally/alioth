import { BranchDTO } from '../../../models/branch'
import { CommitDTO, CommitModel } from '../../../models/commit'
import { DeployModel } from '../../../models/deploy'
import { DockerService } from '../docker/docker.service'

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
    const newCommit = await CommitModel.create({
      commit: branch.commit,
      project: (branch.commit as CommitDTO).project,
      info,
      files: branch.files,
      dependences: branch.dependences,
      status: 'loading',

    })
    const image = await this.dockerService.commitContainer(branch.id)
    newCommit.image = image
    newCommit.status = 'finish'

    await newCommit.save()
  }

  async deploy(commitId: string, info: string) {
    const commit = await this.find(commitId)
    const newDeploy = await DeployModel.create({
      status: 'loading', commit, project: commit.project, info,
    })
    const { port, id } = await this.dockerService.createProd(commit.image)
    newDeploy.id = id
    newDeploy.address = port
    newDeploy.status = 'running'
    await newDeploy.save()
  }
}
