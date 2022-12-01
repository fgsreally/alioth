import { resolve } from 'path'
import { init } from 'es-module-lexer'

import type { Plugin, ViteDevServer } from 'vite'
import { normalizePath } from 'vite'
import sirv from 'sirv'

import type { YuHengConfig } from './types'
import { getPath, resolveAutoFile, updatePageCode } from './utils'
// const _dirname =
//   typeof __dirname !== "undefined"
//     ? __dirname
//     : dirname(fileURLToPath(import.meta.url));
export function YuHeng(config: YuHengConfig = {}): Plugin {
  if (!config.root)
    config.root = './src/views'
  if (!config.componentDir)
    config.componentDir = './src/components'

  function utilsInject() {
    return `function getVueKey(str){
      console.log(str.split('/').reverse()[0])
return str.split('/').reverse()[0]
  }`
  }

  function configFileImport() {
    return config.configFile ? `import hook from "${config.configFile}"` : ''
  }
  function unocssImport() {
    return 'import "uno.css"'
  }
  function configFileInject() {
    return config.configFile ? 'hook({registerComponent,registerModule});' : ''
  }
  function yuhengImport() {
    return `import yuheng, {registerComponent,registerModule,addContext,delComponent} from "@alioth/view"\n
     import "@alioth/view/style.css"
    `
  }

  function HMRInject() {
    return `if (import.meta.hot) {
     if(import.meta.hot.data.components) {
      for(let i in import.meta.hot.data.components){
        delComponent(getVueKey(i))
       }
    }
 
    for(let i in components){
      registerComponent('service',getVueKey(i),components[i].default)
     }

     yuheng()

    for(let i in context){
      addContext(i,context[i])
     }

     import.meta.hot.accept((newModule) => {
    console.log(newModule,'self')
    })
  import.meta.hot.accept(["/yuheng/context.js"],(newModule) => {
    console.log(newModule[0],'out');

       for(let i in newModule[0]){
      addContext(i,newModule[0][i])
     }
    })
}`
  }

  function contextImport() {
    return `const context= import.meta.glob("/yuheng/context.js",{eager:true});console.log(context)
    `
  }
  function componentImport() {
    return `const components= import.meta.glob("/src/components/**/*.vue",{eager:true})
    `
  }
  // ${registerComponentInject()}

  return {
    name: 'vite-plugin-yuheng',
    enforce: 'post',
    async configureServer(server: ViteDevServer) {
      await init
      server.middlewares.use(
        '/__yuheng',
        sirv(resolve(__dirname, '../client'), {
          single: true,
          dev: true,
        }),
      )
      server.middlewares.use('/__yuheng_code', (req, res) => {
        if (req.method === 'POST') {
          req.on('data', (chunk) => {
            const sourcePage = JSON.parse(chunk.toString())
            updatePageCode(getPath(config.root as string), sourcePage)
          })
          res.end('1')
        }
      })
      server.middlewares.use('/__yuheng_context', (req, res) => {
        if (req.method === 'POST') {
          req.on('data', (chunk) => {
            const dependences = JSON.parse(chunk.toString())
            resolveAutoFile(getPath('./yuheng.auto.ts'), dependences)
          })
          res.end('1')
        }
      })
    },

    resolveId(id: string) {
      if (id === '/virtual:yuheng')
        return '\0' + 'virtual:yuheng'
    },
    load(id) {
      if (id === '\0' + 'virtual:yuheng') {
        return `
        ${yuhengImport()}
        ${unocssImport()}
          ${configFileImport()}
          ${contextImport()}
          ${componentImport()}
          ${utilsInject()}
        ${configFileInject()}
         ${HMRInject()}
       
          

         `
      }
    },
    // transform: (code, id) => {
    //   if (id === normalizePath(getPath("./yuheng/context.ts"))) {
    //     console.log(code)
    //     return code + `export {a}`;
    //   }
    // }
  }
}
// async(()=>{
//   const yuhengInitHook=await import("${config.configPath}").catch((e)=>console.log(e))
//   window.__yuhengContext=await import("${config.configPath}").catch((e)=>console.log(e))
//  const {registerComponent}= yuheng(yuhengInitHook)
//  const components=await import.meta.glob("${config.configPath}",{eager:true})
//  for(let i in components){
//   registerComponent()
//  }
//  })()
