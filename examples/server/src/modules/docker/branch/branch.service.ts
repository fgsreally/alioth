import { BranchModel } from '../../../models/branch'
import { CommitService } from '../commit/commit.service'
import { DockerService } from '../docker/docker.service'
@Injectable()
export class BranchService {
  constructor(protected dockerService: DockerService, protected commitService: CommitService) {

  }

  async find(branchId: string) {
    const branch = await BranchModel.findById(branchId).populated(['project', 'commit'])

    if (!branch)
      throw new BadRequestException('不存在')

    return branch
  }

  async updateContent(branchId: string, content: any) {
    const commit = await this.find(branchId)
    commit.files = content
    await commit.save()
  }

  async commit(branchId: string, info: string) {
    const branch = await this.find(branchId)

    return this.commitService.commit(branch, info)
  }

  async create(commitId: string) {
    const commit = await this.commitService.find(commitId)
    const { id, port } = await this.dockerService.createDev(commit.image, [`project=${commit.project}`])
    return await BranchModel.create({
      running: true,
      commit,
      project: commit.project,
      port,
      id,
    })
  }

  async stop(branchId: string) {
    const branch = await this.find(branchId)
    if (!branch.running
    ) return
    await this.dockerService.stop(branch.id)
    branch.running = false

    await branch.save()
  }

  async restart(branchId: string) {
    const branch = await this.find(branchId)
    if (branch.running
    ) return

    await this.dockerService.restart(branch.id)

    branch.running = true

    await branch.save()
  }

  async close(branchId: string) {
    const branch = await this.find(branchId)

    await this.dockerService.kill(branch.id)
    await branch.deleteOne()
  }
}
