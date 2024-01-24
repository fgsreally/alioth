import EventEmitter from 'events'
import { MongoClient } from 'mongodb'
import type { Db } from 'mongodb'

export class DataBase extends EventEmitter {
  db: Db
  conn: MongoClient
  constructor() {
    super()
    const config = this.getConfig()
    this.conn = new MongoClient(config.url, {})
  }

  async init(dbName: string) {
    await this.conn
      .connect()

    this.db = this.conn.db(dbName || 'fgs')
  }

  getConfig() {
    const url = process.env.DB_URI || 'mongodb://localhost:27017'
    if (!url)
      throw new Error('DB_URI does not exist')
    return { url }
  }

  watch(collectionName: string) {
    const stream = this.db.collection(collectionName).watch()

    stream.on('change', (change) => {
      console.log('change')
      const { operationType, fullDocument } = change as any
      this.emit(operationType, fullDocument)
    })
  }
}
export const db = new DataBase()
