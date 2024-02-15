import { posix } from 'path'
import vm from 'node:vm'
import { unlink, writeFile } from 'fs/promises'
import { DataBase } from './database'
const db = new DataBase(process.env.DB_URI || 'mongodb://host.docker.internal:27017,host.docker.internal:27018/?replicaSet=fgs2')
const fileRe = /\.(controller|edge|extension|guard|interceptor|plugin|filter|pipe)\.ts$/i

const FileMap = new Map<string, string>()

let isRunning = false

async function runSandBox() {
  if (isRunning)
    return
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
  isRunning = true
}

async function writeEntryFile() {
  let importCode = ''
  let index = 0
  for (const [filename] of FileMap.entries()) {
    if (fileRe.test(filename))
      importCode += `import * as module${index++} from './${filename}'`
  }
  importCode += `\nconst modules=[${new Array(index).fill(1).reduce((p, _, i) => `${p}module${i},`, '')}]`

  await writeFile('./entry.ts', `
  import {isPhecda,Factory} from 'phecda-server'
  import {bindApp} from 'phecda-server/express'
  import express from 'express'
  import { createServer } from 'http'
  ${importCode}
  
  function parse(module:any){
  return  Object.values(module).filter(isPhecda)
  }
  const data = await Factory(modules.map(parse).flat())
  
  const router = express.Router()
  
  bindApp(router, data)

  const app = express()
  
  app.use(express.json())

  app.use(router)

  
  app.listen(process.env.PORT||8000, () => {
    console.log('start server')
  })
  `)
}

async function init() {
  await db.init(process.env.DB_NAME!)

  const data = await db.db.collection(process.env.DB_COLLECTION!).find({}).toArray()
  for (const item of data) {
    const filePath = posix.join('./src', item.path)

    FileMap.set(filePath, item.code)
  }
  await writeEntryFile()
  runSandBox()
}

async function watchDb() {
  db.watch(process.env.DB_COLLECTION!)
  db.on('insert', async (doc: any) => {
    const filePath = posix.join('./src', doc.path)

    FileMap.set(filePath, doc.code)
    await writeFile(filePath, doc.code)

    if (fileRe.test(filePath))
      await writeEntryFile()

    runSandBox()
  })

  db.on('update', async (doc: any) => {
    const filePath = posix.join('./src', doc.path)
    FileMap.set(filePath, doc.code)
    await writeFile(filePath, doc.code)
  })
  db.on('delete', async (doc: any) => {
    const filePath = posix.join('./src', doc.path)
    FileMap.delete(filePath)
    await unlink(filePath)
    if (fileRe.test(filePath))
      writeEntryFile()
  })
}

export async function start() {
  await init()
  watchDb()
}

start()
