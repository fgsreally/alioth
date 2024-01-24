const FileMap = new Map<string, string>()

export function runSandBox() {

}

export function createEntryFile() {
  let importCode = ''
  let index = 1

  for (const [filename] of FileMap.entries())
    importCode += `import * as module${index++} from '${filename}'`

  importCode += `const modules=[${new Array(FileMap.size).reduce((p, _, i) => `${p}module${++i},`)}]`

  return `
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
  `
}
