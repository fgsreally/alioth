import { CodeVO, ProjectService } from './project.service'

@Controller('/project')
export class ProjectController {
  constructor(protected service: ProjectService) {
  }

  @Post('')
  async create(@Query('user') user: string, @Query('project') project: string) {
    await this.service.create(user, project)

    return 'create finish'
  }

  @Post('')
  async update(@Body() data: CodeVO) {
    await this.service.updateCode(data)

    return 'update success'
  }
}
