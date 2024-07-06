import { Injectable } from 'phecda-server'
import { DbModule } from 'alioth-cloud-sdk'
import { nanoid } from 'nanoid'

import { CommitService } from '../commit/commit.service'
import { NamespaceModel } from '../../../models/namespace'

@Injectable()
export class NamespaceService {
  constructor(protected commitService: CommitService, protected DB: DbModule) {
  }

  async create() {
    const password = nanoid()

    const namespace = await NamespaceModel.create({
      data: {
        password,
      },
    })
    await this.DB.conn.db(namespace.id).admin().command({
      createUser: namespace.id,
      pwd: password,
      roles: [{ role: 'readWrite', db: namespace.id }],
    })

    return namespace
  }
}
