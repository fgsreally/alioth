/* eslint-disable no-console */
import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'
import { Worker } from 'worker_threads'
import { PluginOption, normalizePath } from 'vite'
import colors from 'colors'
import fse from 'fs-extra'
import { log } from '../utils'

export interface ConnectorOpts {
  website: string | Record<string, string>
  project: string
  query?: Record<string, string>
  presets?: string[]
  entry: Record<string, string>
}
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
// connect platform and vite
export function Connector(options: ConnectorOpts): PluginOption {
  const { project, entry, presets = [], website, query = {} } = options
  const entryFiles = Object.values(options.entry).map(item => normalizePath(resolve(process.cwd(), item)))
  return {
    name: 'alioth-connector',
    apply: 'serve',

    configureServer(server) {
      const {
        printUrls,
        config: {
          server: { https, port },
        },
      } = server

      server.printUrls = () => {
        const host
          = server.resolvedUrls?.local[0].replace(/\/$/, '')
          || `${https ? 'https' : 'http'}://localhost:${port || '5173'}`

        printUrls()
        const hash = generateQuery({
          url: host,
          // externals: JSON.stringify(externals),
          presets: JSON.stringify(presets),
          ...query,
        })
        if (typeof website === 'string') {
          console.log(
            `  ${colors.green('➜')}  ${colors.bold('Alioth')} :${colors.blue(`${website}#${hash}`)}`,
          )
        }
        else {
          Object.entries(website).forEach(([key, url]) => {
            console.log(
              `  ${colors.green('➜')}  ${colors.bold(`Alioth-${key}`)} :${colors.blue(`${url}#${hash}`)}`,
            )
          })
        }
      }

      server.middlewares.use(async (req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*')
        res.setHeader('Access-Control-Allow-Headers', '*')

        res.setHeader('Access-Control-Allow-Methods', '*')
        if (req?.url === '/alioth' && req.method === 'GET')
          return res.end(JSON.stringify({ entry, project }))

        if (req?.url === '/alioth/action' && req.method === 'POST') {
          const { type, data } = await reqToJSON(req)
          if (type === 'bundle') {
            const worker = new Worker(resolve(__dirname, './worker.js'), {
              env: {
                ...process.env,
                NODE_ENV: 'production',
                ALIOTH: 'bundle',
              },
            })

            worker.postMessage(data)
            worker.once('message', (msg) => {
              log('bundle success!!')
              res.end(msg)
            })
          }
          if (type === 'writeFiles') {
            await Promise.all(Object.entries(data).map(([path, content]) => {
              log(`write file -- ${path}`)
              return fse.outputFile(path, content)
            }))
            res.end('')
          }
          return
        }

        next()
      })
    },
    transform(code, id) {
      if (entryFiles.includes(id))

        return code + injectHMR()
    },
  }
}

function injectHMR() {
  return `\nif (import.meta.hot) {
      import.meta.hot.accept((newModule) => {
        const internal=window.__ALIOTH__
        if(internal)internal.invoke('hmr',import.meta.url,newModule)
      })
    }`
}

function generateQuery(obj: Record<string, string>) {
  return Object.entries(obj).map(([key, value]) => {
    return `${key}=${encodeURIComponent(value)}`
  }).join('&')
}

function reqToJSON(req: any) {
  let data = ''
  return new Promise<any>((resolve) => {
    req.on('data', (chunk: any) => {
      data += chunk
    })
    req.on('end', async () => {
      resolve(JSON.parse(data))
    })
  })
}
