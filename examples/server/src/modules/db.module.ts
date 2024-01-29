import { MongoClient } from 'mongodb'
import type { Db } from 'mongodb'

export class DbModule {
  db: Db
  conn: MongoClient
  constructor() {
    this.conn = new MongoClient('mongodb://localhost:27017')
  }

  @Init
  async init(dbName = 'alioth-server') {
    console.log('init before')

    await this.conn
      .connect()

    console.log('init finish')
    this.db = this.conn.db(dbName)
  }
}
