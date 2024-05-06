import { Injectable } from 'phecda-server'
import { DbModule } from 'alioth-cloud-sdk'
import { IsString } from '../../../utils'
import { ProjectModel } from '../../../models/project'

import { CommitService } from '../commit/commit.service'

export class CodeVO {
  @IsString
  user: string

  @IsString
  project: string

  @IsString
  path: string

  @IsString
  code: string
}

@Injectable()
export class ProjectService {
  constructor(protected commitService: CommitService, protected DB: DbModule) {
  }

  async create(namespace: string, name: string) {
    const projects = await ProjectModel.find({ namespace })
    if (projects.some(item => item.name === name))
      throw new BadRequestException('project is created')
    if (projects.length === 0) {
      await this.DB.conn.db(namespace).admin().command({
        createUser: 'myUsername',
        pwd: 'myPassword',
        roles: [{ role: 'readWrite', db: namespace }],
      })
    }
    const project = await ProjectModel.create({ namespace, name })

    await this.commitService.init(project)

    return project
  }
}
