import EventEmitter from 'events'
import vm from 'node:vm'
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
    await this.conn
      .connect()

    this.db = this.conn.db(dbName)
  }

  // watch(collectionName: string) {
  //   const stream = this.db.collection(collectionName).watch(undefined, { fullDocument: 'updateLookup' })

  //   stream.on('change', (change) => {
  //     const { operationType, fullDocument } = change as any

  //     this.emit(operationType, fullDocument)
  //   })
  // }

  collection(collectionName: string) {
    return this.db.collection(collectionName)
  }
}

export async function runSandBox() {
  const script = new vm.Script(
    'import("./entry.ts")', {
    // use --experimental-vm-modules
    // @ts-expect-error node types miss
      importModuleDynamically(specifier) {
        return import(specifier)
      },

    },
  )
  script.runInNewContext({})
}
