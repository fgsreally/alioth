import { MongoClient } from 'mongodb'
import type { Db } from 'mongodb'

export class DbModule {
  db: Db
  conn: MongoClient
  constructor() {
    this.conn = new MongoClient(process.env.MONGO_URI)
  }

  @Init
  async init(dbName = 'alioth-server') {
    await this.conn
      .connect()

    this.db = this.conn.db(dbName)
  }
}
