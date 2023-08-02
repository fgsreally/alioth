/* eslint-disable no-console */
import type { PluginOption } from 'vite'
import colors from 'colors'

interface ConnectorOpts {
  project: string
  externals?: Record<string, string>
  presets?: string[]
  website: string
  entry: Record<string, string>
}

interface ExternalMapOpts {
  externals?: Record<string, string | undefined>
  importmap?: boolean
}
export function ExternalMap(options: ExternalMapOpts = {}): PluginOption {
  const { externals = {}, importmap = true } = options
  const dep = Object.assign({
    'vue': 'http://localhost:4010/vue.mjs',
    'phecda-vue': 'http://localhost:4010/phecda-vue.mjs',
  }, externals)
  let isDev: boolean
  return {
    name: 'alioth-external-map',
    enforce: 'pre',

    config(_, { command }) {
      isDev = command === 'serve'
      if (isDev || !importmap) {
        return {
          resolve: {
            alias: dep as any,
          },
        }
      }
    },
    resolveId(source) {
      if (source in dep) {
        if ((!isDev) && importmap)
          return { id: source, external: true }
      }
    },
  }
}

export function Connector(options: ConnectorOpts): PluginOption {
  const { project, website, externals = {}, entry, presets = [] } = options
  // const entryFiles = Object.values(options.entry).map(item => normalizePath(resolve(process.cwd(), item)))
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
        console.log(
          `  ${colors.green('➜')} ${colors.bold('Alioth')}:${colors.blue(`${website ?? 'http://localhost:4010'}?url=${encodeURIComponent(host)}&externals=${encodeURIComponent(JSON.stringify(externals))}&presets=${encodeURIComponent(JSON.stringify(presets))}`)}`,
        )
      }

      server.middlewares.use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*')
        res.setHeader('Access-Control-Allow-Headers', '*')

        res.setHeader('Access-Control-Allow-Methods', '*')
        if (req?.url === '/alioth' && req.method === 'GET')

          res.end(JSON.stringify({ entry, project }))

        else next()
      })
    },
    // transform(code, id) {
    //   if (entryFiles.includes(id))

    //     return code + injectHMR()
    // },
  }
}

export function Alioth(options: ConnectorOpts & ExternalMapOpts) {
  return [
    Connector(options),
    ExternalMap(options),
  ]
}

// function injectHMR() {
//   return `\nif (import.meta.hot) {
//     import.meta.hot.accept((newModule) => {
//       if(window.$alioth_update)window.$alioth_update(import.meta.url,newModule)
//     })
//   }`
// }

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
