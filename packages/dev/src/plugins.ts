/* eslint-disable no-console */
import { dirname, resolve } from 'path'
import fs from 'fs'
import { Worker } from 'worker_threads'
import { fileURLToPath } from 'url'
import { createFilter, normalizePath } from 'vite'
import type { FilterPattern, PluginOption } from 'vite'
import colors from 'colors'
import axios from 'axios'
import { log } from './utils'
interface ConnectorOpts {
  website: string | Record<string, string>
  project: string
  externals?: Record<string, string>
  presets?: string[]
  entry: Record<string, string>
}

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
interface ExternalMapOpts {
  externals?: Record<string, string >
  importmap?: boolean
}

export function ExternalMap(options: ExternalMapOpts = {}): PluginOption {
  const {
    externals = {}, importmap = true,
  } = options
  let isDev: boolean
  return {
    name: 'alioth-external-map',
    enforce: 'pre',

    config(_, { command }) {
      isDev = command === 'serve'
      if (isDev || !importmap) {
        return {
          resolve: {
            alias: externals as any,
          },
        }
      }
    },
    resolveId(source) {
      if (isDev)
        return

      if (source in externals)

        return { id: importmap ? source : externals[source]!, external: true }
    },
  }
}

export function Connector(options: ConnectorOpts): PluginOption {
  const { project, externals = {}, entry, presets = [], website } = options
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
        const query = generateQuery({
          url: host,
          externals: JSON.stringify(externals),
          presets: JSON.stringify(presets),

        })
        if (typeof website === 'string') {
          console.log(
            `  ${colors.green('➜')}  ${colors.bold('Alioth')} :${colors.blue(`${website}?${query}`)}`,
          )
        }
        else {
          Object.entries(website).forEach(([key, url]) => {
            console.log(
              `  ${colors.green('➜')}  ${colors.bold(`Alioth-${key}`)} :${colors.blue(`${url}?${query}`)}`,
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

        if (req?.url === '/alioth/file' && req.method === 'POST') {
          const { file, content } = await reqToJSON(req)
          fs.writeFileSync(file, content)
          log(`create file ${file}`)
          res.end('0')

          return
        }
        if (req?.url === '/alioth/action' && req.method === 'POST') {
          const { type, content, entry = 'entry.js' } = await reqToJSON(req)
          if (type === 'bundle') {
            fs.writeFileSync(entry, content)
            const worker = new Worker(resolve(__dirname, './worker.js'), {
              env: {
                ...process.env,
                NODE_ENV: 'production',
                ALIOTH: 'bundle',
              },
            })

            worker.postMessage('entry.js')
            worker.once('message', (msg) => {
              log('bundle success!!')
              fs.unlinkSync(entry)
              res.end(msg)
            })
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

export function Alioth(options: ConnectorOpts & ExternalMapOpts) {
  return [
    Connector(options),
    ExternalMap(options),
  ]
}

function injectHMR() {
  return `\nif (import.meta.hot) {
    import.meta.hot.accept((newModule) => {
      if(window.$alioth_update)window.$alioth_update(import.meta.url,newModule)
    })
  }`
}

export function DynamicImportmap(imports: Record<string, string> = {}): PluginOption {
  return {
    name: 'alioth-dynamic-importmap',
    enforce: 'post',
    // apply: 'build',
    transformIndexHtml(html) {
      return {
        html,
        tags: [
          {
            tag: 'script',
            injectTo: 'head-prepend',
            children: `function getQuery(key) {
              return new URLSearchParams(location.href.split('?')[1] || '').get(key)
             }
            const script = document.createElement('script');script.type = 'importmap';const imports = getQuery('externals');script.innerHTML = JSON.stringify(Object.assign(${JSON.stringify(
              { imports },
            )}, imports?JSON.parse(decodeURIComponent(imports)):{}));document.head.append(script);`,
          },
        ],
      }
    },
  }
}

function generateQuery(obj: Record<string, string>) {
  return Object.entries(obj).map(([key, value]) => {
    return `${key}=${encodeURIComponent(value)}`
  }).join('&')
}

const urlReg = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/
const pathReg = /^(\/|\.{1,2}\/).+$/

export function RemoteLoader(RE: RegExp): PluginOption {
  return {
    name: 'alioth-remote-loader',
    enforce: 'pre',
    resolveId(source, importer) {
      if (urlReg.test(source)) {
        if (RE.test(source))
          return source

        else
          return { id: source, external: true }
      }

      if (importer && urlReg.test(importer) && pathReg.test(source))
        return new URL(source, importer).href
    },
    async load(id) {
      if (urlReg.test(id)) {
        const { data } = await axios.get(id)
        return { code: data }
      }
    },
  }
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

export function SandBox(pattern: FilterPattern, opts: {
  nativeVars?: string[]
  globalVar?: string
} = {}): PluginOption {
  const filter = createFilter(pattern)
  const { nativeVars = ['document', 'window'], globalVar = '$alioth_sandbox' } = opts
  return {

    name: 'alioth-sandbox',

    transform(code, id) {
      if (filter(id))
        return `const {${nativeVars.join(',')}}=${globalVar}\n${code}`
    },
  }
}
