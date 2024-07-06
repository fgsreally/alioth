import { ObjectId } from 'mongodb'
import { ProjectModel } from '../../../models/project'

@Controller('/project')
export class ProjectController {
  @Get('')
  async find(@Query('id') id: string) {
    const project = await ProjectModel.findById(id)
    if (!project)
      throw new BadRequestException('')
    return project.toJSON()
  }

  @Get('/:id')
  async findByNamespace(@Param('namespace') namespace: string) {
    const projects = await ProjectModel.find({ namespace })

    return projects.map(item => item.toJSON())
  }

  @Post('')
  async create(@Query('namespace') namespace: string, @Query('project') project: string) {
    return ProjectModel.create({
      name: project, namespace: new ObjectId(namespace),
    })
  }

  @Delete('')
  async remove(@Query('id') id: string) {
    const project = await ProjectModel.findById(id)
    if (!project)
      throw new BadRequestException('')
    await project.deleteOne()

    return true
  }
}
