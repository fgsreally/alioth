import { unlink, writeFile } from 'fs/promises'
import { posix } from 'path'
import vm from 'node:vm'
import { readFileSync } from 'fs'

import { db } from './database'
const FileMap = new Map<string, string>()

export async function runSandBox() {
  const context = {
    exports: {},
    console, // custom console object
  }
  const sandbox = vm.createContext(context)

  const module = new vm.SourceTextModule('import("./entry.ts")', {
    context: sandbox,
  })
  await module.link(() => {})

  await module.evaluate()
}

export async function writeEntryFile() {
  let importCode = ''
  let index = 1

  for (const [filename] of FileMap.entries())
    importCode += `import * as module${index++} from '${filename}'`

  importCode += `\nconst modules=[${new Array(FileMap.size).reduce((p, _, i) => `${p}module${++i},`, '')}]`

  await writeFile('./entry.ts', `
 import {isPhecda,Factory} from 'phecda-server'
 import {bindApp} from 'phecda-server/h3'
 import { createApp, toNodeListener, createRouter} from 'h3'
 import { createServer } from 'http'
 ${importCode}

 function parse(module:any){
 return  Object.values(module).filter(isPhecda)
 }
 const data = await Factory(modules)

 const router = createRouter()

 bindApp(router, data, {})

 const app = createApp()

 app.use(router)
 createServer(toNodeListener(app)).listen(process.env.port)
 `)
}
export function watchDb() {
  db.watch('test')
  db.on('insert', async (doc: any) => {
    const filePath = posix.join('./src', doc.path)
    FileMap.set(filePath, doc.code)
    await writeFile(filePath, doc.code)
    await writeEntryFile()
    runSandBox()
  })

  db.on('update', async (doc: any) => {
    const filePath = posix.join('./src', doc.path)
    FileMap.set(filePath, doc.code)
    await writeFile(filePath, doc.code)
    writeEntryFile()
  })
  db.on('delete', async (doc: any) => {
    const filePath = posix.join('./src', doc.path)
    FileMap.delete(filePath)
    await unlink(filePath)
    writeEntryFile()
  })
}

export async function start() {
  await db.init(process.env.DB_NAME!)
  console.log('初始化db')
  watchDb()
  test()
}

// start()
runSandBox()

async function test() {
  setTimeout(() => {
    console.log('添加a.ts')
    db.db.collection('test').insertOne({
      path: 'a.ts',
      code: `
      import {Controller,Init} from 'phecda-server'
      @Controller('/a')
      export class ControllerA{
@Init
_init(){
    console.log('init')
}
        
      }
      
      `,
    })
  }, 5000)
  // setTimeout(() => {
  //   console.log('更改a.ts')
  //   db.db.collection('test').updateOne({
  //     path: 'a.ts',

  //   }, {
  //     $set: {
  //       code: `     import {Controller,Init} from 'phecda-server'
  //         @Controller('/a')
  //         export class ControllerA{
  //   @Init
  //   _init(){
  //       console.log('init2')
  //   }

  //         }`,
  //     },
  //   })
  // }, 20000)
}
