import { posix } from 'path'
import { unlink, writeFile } from 'fs/promises'
import { exec } from 'child_process'
import { WebSocketServer } from 'ws'

import { DataBase, runSandBox } from './helper'

const db = new DataBase(process.env.DB_URI!)
const fileRe = /\.(controller|edge|extension|guard|interceptor|plugin|filter|pipe)\.ts$/i
const FileMap = new Map<string, string>()
const DepMap = new Map<string, string>()

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

  
  app.listen(process.env.PORT, () => {
    console.log('start server')
  })
  `)
}

async function init() {
  await db.init(process.env.DB_NAME!)

  const data = await db.collection(process.env.PROJECT_COLLECTION!).find({}).toArray()
  for (const item of data) {
    if (item.path)

      FileMap.set(item.path, item.code)

    if (item.dependence)
      DepMap.set(item.dependence, item.version)
  }
  await writeEntryFile()
  runSandBox()
}

async function createWS() {
  const ws = new WebSocketServer({ port: process.env.WS_PORT })
  const wsSet = new Set<any>()

  ws.on('connection', (wss) => {
    wsSet.add(wss)
    wss.on('message', async (e) => {
      const { event, id } = JSON.parse(e.toString()) as { event: Event;id: string }
      await handleEvent(event)
      wsSet.forEach((client) => {
        client.send(JSON.stringify({
          success: true,
          isYourUpdate: client === wss,
          id,
        }))
      })
    })
  })
}

// async function watchDb() {
//   db.watch(process.env.DB_COLLECTION!)
//   db.on('insert', async (event: any) => {
//     const filePath = posix.join('./src', event.path)

//     FileMap.set(filePath, event.code)
//     await writeFile(filePath, event.code)

//     if (fileRe.test(filePath))
//       await writeEntryFile()

//     runSandBox()
//   })

//   db.on('update', async (event: any) => {
//     const filePath = posix.join('./src', event.path)
//     FileMap.set(filePath, event.code)
//     await writeFile(filePath, event.code)
//   })
//   db.on('delete', async (event: any) => {
//     const filePath = posix.join('./src', event.path)
//     FileMap.delete(filePath)
//     await unlink(filePath)
//     if (fileRe.test(filePath))
//       writeEntryFile()
//   })
// }

type Event = {
  type: 'update' | 'add'
  path: string
  code: string
} | {
  type: 'remove'
  path: string
} | {
  type: 'save'
  path: string
} | {
  type: 'addDependence'
  dependence: string
  version?: string
} | {
  type: 'removeDependence'
  dependence: string
} | {
  type: 'build'
}

async function handleEvent(event: Event) {
  if (event.type === 'add') {
    FileMap.set(event.path, event.code)
    await writeFile(posix.join('./src', event.path), event.code)

    if (fileRe.test(event.path))
      await writeEntryFile()

    runSandBox()
  }
  if (event.type === 'update') {
    FileMap.set(event.path, event.code)
    await writeFile(posix.join('./src', event.path), event.code)
  }
  if (event.type === 'remove') {
    FileMap.delete(event.path)
    await unlink(posix.join('./src', event.path))
    if (fileRe.test(event.path))
      writeEntryFile()
  }
  if (event.type === 'save')
    await save()

  if (event.type === 'addDependence') {
    await exec(`pnpm i ${event.dependence}@${event.version || 'latest'}`)
    DepMap.set(event.dependence, event.version || 'latest')
  }
  if (event.type === 'removeDependence') {
    if (DepMap.get(event.dependence)) {
      await exec(`pnpm uninstall ${event.dependence}`)
      DepMap.delete(event.dependence)
    }
  }
}

async function save() {
  const collection = db.collection(process.env.PROJECT_COLLECTION!)
  await collection.deleteMany({})

  await collection.insertMany([...[...FileMap].map(([path, code]) => {
    return { path, code }
  }), ...[...DepMap].map(([dependence, version]) => {
    return { dependence, version }
  })])
}

export async function start() {
  await init()
  createWS()
}

start()
