import { ObjectId } from 'mongodb'
import { BranchModel } from '../../../models/branch'
import { BranchService } from './branch.service'

@Controller('/branch')
export class BranchController {
  constructor(protected branchService: BranchService) {

  }

  @Get('/:project')
  async findByProject(@Param('project') project: string) {
    const branchs = await BranchModel.find({ project: new ObjectId(project) })

    return branchs.map(item => item.toJSON())
  }

  @Put('/files')
  async updateFiles(@Body('id') commitId: string, @Body() files: { content: string; filename: string }[]) {
    await this.branchService.updateContent(commitId, files)

    return true
  }

  @Post('')
  async create(@Body('id') commitId: string) {
    return this.branchService.create(commitId)
  }

  @Post('/remove')
  async remove(@Body('id') branchId: string) {
    return this.branchService.remove(branchId)
  }

  @Post('/commit')
  async commit(@Body('id') branchId: string,
    @Body('info') info: string,
  ) {
    return this.branchService.commit(branchId, info)
  }
}
