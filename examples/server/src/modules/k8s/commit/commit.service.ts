import { BranchDTO } from '../../../models/branch'
import { CommitDTO, CommitModel } from '../../../models/commit'
import { DeployModel } from '../../../models/deploy'
import { NamespaceDTO } from '../../../models/namespace'
import { ProjectDTO } from '../../../models/project'
import { K8sService } from '../k8s/k8s.service'

@Injectable()
export class CommitService {
  constructor(
    protected K8S: K8sService,
  ) {}

  async init(project: ProjectDTO) {
    await CommitModel.create({
      project,
      info: 'first commit',
      image: process.env.IMAGE_NAME,
    })
  }

  async find(id: string) {
    const commit = await CommitModel.findById(id).populate(['project', 'project.namespace'])

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
    const image = await this.K8S.commitContainer(branch.id, (branch.project as ProjectDTO).namespace.id)
    newCommit.image = image
    newCommit.status = 'finish'

    await newCommit.save()
  }

  async deploy(commitId: string, info: string) {
    const commit = await this.find(commitId)
    const newDeploy = await DeployModel.create({
      status: 'loading', commit, project: commit.project, info,
    })

    const { id: namespace, env } = (commit.project as ProjectDTO).namespace as NamespaceDTO
    const { address, id } = await this.K8S.createProd(namespace, commit.image, env)
    newDeploy.id = id
    newDeploy.address = address
    newDeploy.status = 'running'
    await newDeploy.save()
  }
}
