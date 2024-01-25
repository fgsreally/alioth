import { posix } from 'path'
import vm from 'node:vm'
import { unlink, writeFile } from 'fs-extra'

import { DataBase } from './database'
import { CONFIG } from './config'
const db = new DataBase(process.env.DB_URI!)

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
      importCode += `import * as module${++index} from './${filename}'`
  }
  importCode += `\nconst modules=[${new Array(index).fill(1).reduce((p, _, i) => `${p}module${i},`, '')}]`

  await writeFile('./entry.js', `
  import {isPhecda,Factory} from 'phecda-server'
  import {bindApp} from 'phecda-server/h3'
  import { createApp, toNodeListener, createRouter} from 'h3'
  import { createServer } from 'http'
  ${importCode}
  
  function parse(module:any){
  return  Object.values(module).filter(isPhecda)
  }
  const data = await Factory(modules.map(parse).flat())
  
  const router = createRouter()
  
  bindApp(router, data, {})
  
  const app = createApp()
  
  app.use(router)
  createServer(toNodeListener(app)).listen(process.env.port)
  `)
}
function watchDb() {
  db.watch(CONFIG.CODE_COLLECTION)
  db.on('insert', async ({ doc, collection }: any) => {
    if (collection !== CONFIG.CODE_COLLECTION)
      return
    const filePath = posix.join('./src', doc.path)

    FileMap.set(filePath, doc.code)
    await writeFile(filePath, doc.code)

    if (fileRe.test(filePath))
      await writeEntryFile()

    runSandBox()
  })

  db.on('update', async ({ doc, collection }: any) => {
    if (collection !== CONFIG.CODE_COLLECTION)
      return
    const filePath = posix.join('./src', doc.path)
    FileMap.set(filePath, doc.code)
    await writeFile(filePath, doc.code)
  })
  db.on('delete', async ({ doc, collection }: any) => {
    if (collection !== CONFIG.CODE_COLLECTION)
      return
    const filePath = posix.join('./src', doc.path)
    FileMap.delete(filePath)
    await unlink(filePath)
    if (fileRe.test(filePath))
      writeEntryFile()
  })
}

export async function start() {
  await db.init(process.env.DB_NAME!)
  watchDb()
}

start()
