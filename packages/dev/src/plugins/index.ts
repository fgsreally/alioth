/* eslint-disable no-console */
import { resolve } from 'path'
import { normalizePath } from 'vite'
import type { PluginOption } from 'vite'
import colors from 'colors'

export function Alioth(options: AliothOptions): PluginOption {
  const entryFiles = Object.values(options.entry).map(item => normalizePath(resolve(process.cwd(), item)))
  return [{
    name: 'alioth',
    apply: 'serve',

    config() {
      return {
        resolve: {
          alias: {
            vue: 'https://cdnjs.cloudflare.com/ajax/libs/vue/3.2.47/vue.esm-browser.min.js',
          },
        },
      }
    },
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
          `  ${colors.green('➜')} ${colors.bold('Alioth')}:${colors.blue(` http://127.0.0.1:5173?url=${encodeURIComponent(host)}`)}`,
        )
      }

      server.middlewares.use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*')
        res.setHeader('Access-Control-Allow-Headers', '*')

        res.setHeader('Access-Control-Allow-Methods', '*')
        if (req?.url === '/alioth' && req.method === 'GET')

          res.end(JSON.stringify({ entry: options.entry, project: options.project }))

        else next()
      })
    },
    transform(code, id) {
      if (entryFiles.includes(id))

        return code + injectHMR()
    },
  },
    // typedocMD(),

  // vueMeta(),
  ]
}

interface AliothOptions {
  project: string
  entry: Record<string, string>
}

function injectHMR() {
  return `\nif (import.meta.hot) {
    import.meta.hot.accept((newModule) => {
      if(window.$alioth_update)window.$alioth_update(import.meta.url,newModule)
    })
  }`
}
