import { ObjectId } from 'mongodb'
import { CommitModel } from '../../../models/commit'
import { CommitService } from './commit.service'

@Controller('/commit')
export class CommitController {
  constructor(protected commitService: CommitService) {

  }

  @Get('/project/:project')
  async findByProject(@Param('project') project: string) {
    const commits = await CommitModel.find({ project: new ObjectId(project) })

    return commits.map(item => item.toJSON())
  }

  @Post('/deploy')
  async deploy(@Query('id') id: string, @Body('info') info: string) {
    return await this.commitService.deploy(id, info)
  }
}
