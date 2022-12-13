import { resolve } from 'path'
import { init } from 'es-module-lexer'
import sirv from 'sirv'
import type { PluginOption, ViteDevServer } from 'vite'
import fse from 'fs-extra'
import colors from 'colors'
import type { YuHengConfig } from '../types'
import { analyseAutoDTS, colorUrl, getPath, resolveAutoFile, sideEffectImport, updatePageCode } from '../utils'

export function Alioth(config: YuHengConfig = {}): PluginOption {
  if (!config.root)
    config.root = './src/views'
  if (!config.componentDir)
    config.componentDir = './src/components'

  const resolveConfig = {
    root: './src/views',
    componentDir: './src/components',
    ...config,
  } as Required<YuHengConfig>

  let localDep: string[] = analyseAutoDTS(resolveConfig.dts)

  fse.watchFile(resolveConfig.dts, () => {
    localDep = analyseAutoDTS(resolveConfig.dts)
  })

  const ctxFilePath = getPath('.alioth/context.js')

  fse.ensureFile(ctxFilePath)

  function utilsInject() {
    return `function getVueKey(str){
  return str.split('/').reverse()[0]
    }`
  }

  function yuhengImport() {
    return `import yuheng, {registerComponent,registerModule,addContext,delComponent} from "@alioth/view"\n
       import "@alioth/view/style.css"
      `
  }
  function HMRInject() {
    return `if (import.meta.hot) {
    
  
      for(let i in components){
        registerComponent('local',getVueKey(i),components[i].default)
       }
  
  
       if (!import.meta.hot.data.components) {
        yuheng()
  
       }else{
        for(let i in import.meta.hot.data.components){
          if(!(i in components)){
            delComponent(getVueKey(i))
          
          }
        }
       }
  
      for(let i in context["/.alioth/context.js"]){
        
        addContext(i,context["/.alioth/context.js"][i])
       }
  
       import.meta.hot.accept((newModule) => {
      })
  
  
  
    import.meta.hot.accept(["/.alioth/context.js"],(newModule) => {
  
         for(let i in newModule[0]){
        addContext(i,newModule[0][i])
       }
      })
  
      import.meta.hot.data.components=components
  
  
  }`
  }

  function contextImport() {
    return `const context= import.meta.glob("/.alioth/context.js",{eager:true});
      `
  }
  function componentImport() {
    return `const components= import.meta.glob("/src/components/**/*.vue",{eager:true})
      `
  }
  // ${registerComponentInject()}

  return {
    name: 'vite-plugin-alioth',
    apply: 'serve',
    enforce: 'post',
    async configureServer(server: ViteDevServer) {
      await init
      const {
        printUrls,
        config: {
          server: { https, port },
        },
      } = server

      server.printUrls = () => {
        const host = server.resolvedUrls?.local[0].replace(/\/$/, '') || `${https ? 'https' : 'http'}://localhost:${port || '5173'}`

        printUrls()

        // eslint-disable-next-line no-console
        console.log(
            `  ${colors.green('➜')}  ${colors.bold('Alioth')}: ${colorUrl(
              `${host}/__alioth`,
            )}`)
      }

      server.middlewares.use(
        '/__alioth',
        sirv(resolve(__dirname, '../assets/dev'), {
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

            resolveAutoFile(ctxFilePath, dependences, localDep)
          })
          res.end('1')
        }
      })
    },

    resolveId(id: string) {
      if (id === '/virtual:alioth')
        return '\0' + 'virtual:alioth'
    },
    load(id) {
      if (id === '\0' + 'virtual:alioth') {
        return `
          ${yuhengImport()}
          ${sideEffectImport(config.sideEffects)}  
            ${contextImport()}
            ${componentImport()}
            ${utilsInject()}
           ${HMRInject()}
      
           `
      }
    },

  }
}

