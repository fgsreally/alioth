import { ObjectId } from 'mongodb'
import { DeployModel } from '../../../models/deploy'
import { DeployService } from './deploy.service'

@Controller('/deploy')
export class DeployController {
  constructor(protected deployService: DeployService) {

  }

  @Get('/project/:project')
  async findByProject(@Param('project') project: string) {
    const commits = await DeployModel.find({ project: new ObjectId(project) })

    return commits.map(item => item.toJSON())
  }

  @Delete('/:id')

  async remove(@Param('id') id: string) {
    return this.deployService.remove(id)
  }
}
