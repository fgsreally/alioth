import { BranchModel } from '../../../models/branch'
import { ProjectDTO } from '../../../models/project'
import { CommitService } from '../commit/commit.service'
import { K8sService } from '../k8s/k8s.service'
@Injectable()
export class BranchService {
  constructor(protected k8sService: K8sService, protected commitService: CommitService) {

  }

  async find(branchId: string) {
    const branch = await BranchModel.findById(branchId).populate(['project', 'commit'])

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
    const newBranch = await BranchModel.create({
      running: true,
      commit,
      project: commit.project,
      status: 'loading',
    })
    const { id, address } = await this.k8sService.createDev((commit.project as ProjectDTO).namespace, commit.image)// [`project=${commit.project}`]
    newBranch.id = id

    newBranch.address = address
    newBranch.status = 'running'

    await newBranch.save()
  }

  async remove(branchId: string) {
    const branch = await this.find(branchId)

    await this.k8sService.killDev((branch.project as ProjectDTO).namespace, branch.id)
    await branch.deleteOne()
  }
}
