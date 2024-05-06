import { ProjectModel } from '../../../models/project'
import { ProjectService } from './project.service'

@Controller('/project')
export class ProjectController {
  constructor(protected projectService: ProjectService) {
  }

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
    return this.projectService.create(namespace, project)
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
