/* eslint-disable no-console */
import { resolve } from 'path'
import fs from 'fs'
import { type PluginOption, normalizePath } from 'vite'
import colors from 'colors'
import axios from 'axios'
import { log } from '../utils'
interface ConnectorOpts {
  website: string
  project: string
  externals?: Record<string, string>
  presets?: string[]
  entry: Record<string, string>
}

interface ExternalMapOpts {
  externals?: Record<string, string | undefined>
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
      if (source in externals) {
        if ((!isDev) && importmap)
          return { id: source, external: true }
      }
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
        console.log(
          `  ${colors.green('➜')}  ${colors.bold('Alioth-Dev')} :${colors.blue(`${website}?${query}`)}`,
        )
        console.log(
          `  ${colors.green('➜')}  ${colors.bold('Alioth-Prod')} :${colors.blue(`${website}/preview?${query}`)}`,
        )
      }

      server.middlewares.use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*')
        res.setHeader('Access-Control-Allow-Headers', '*')

        res.setHeader('Access-Control-Allow-Methods', '*')
        if (req?.url === '/alioth' && req.method === 'GET')
          return res.end(JSON.stringify({ entry, project }))

        if (req?.url === '/alioth/file' && req.method === 'POST') {
          let data = ''

          req.on('data', (chunk) => {
            data += chunk
          })
          req.on('end', () => {
            const { file, content } = JSON.parse(data)
            fs.writeFileSync(file, content)
            log(`create file ${file}`)
            res.end('1')
          })

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

export function DynamicImportmap(imports: Record<string, string > = {}): PluginOption {
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

export function RemoteLoader(): PluginOption {
  return {
    name: 'alioth-remote-loader',
    enforce: 'pre',
    resolveId(source, importer) {
      if (urlReg.test(source))
        return source
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
