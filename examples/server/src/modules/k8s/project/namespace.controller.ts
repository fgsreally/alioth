import { NamespaceModel } from '../../../models/namespace'
import { NamespaceService } from './namespace.service'

@Controller('/namespace')
export class NamespaceController {
  constructor(protected NS: NamespaceService) {
  }

  @Get('')
  async find(@Query('id') id: string) {
    const ns = await NamespaceModel.findById(id)
    if (!ns)
      throw new BadRequestException('')
    return ns.toJSON()
  }

  @Post('')
  async create() {
    const ns = await this.NS.create()
    return ns.id
  }

  @Delete('')
  async remove(@Query('id') id: string) {
    return await NamespaceModel.findByIdAndDelete(id)
  }
}
