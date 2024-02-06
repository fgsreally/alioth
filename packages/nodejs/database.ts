import EventEmitter from 'events'
import { MongoClient } from 'mongodb'
import type { Db } from 'mongodb'

export class DataBase extends EventEmitter {
  db: Db
  conn: MongoClient
  constructor(url: string) {
    super()
    this.conn = new MongoClient(url)
  }

  async init(dbName: string) {
    console.log(dbName)
    await this.conn
      .connect()

    this.db = this.conn.db(dbName)
  }

  watch(collectionName: string) {
    console.log(collectionName)

    const stream = this.db.collection(collectionName).watch(undefined, { fullDocument: 'updateLookup' })

    stream.on('change', (change) => {
      console.log(change)
      const { operationType, fullDocument } = change as any

      this.emit(operationType, fullDocument)
    })
  }
}
