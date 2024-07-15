import { Internal, VirtualDocument } from 'alioth-lib'
import { getR } from 'phecda-vue'
import type { App } from 'vue'
export const aliothVueSymbol = Symbol('alioth-vue')
export function vuePlugin() {
  return {
    install(app: App) {
      /**
                                 * only work for prod (not in editor)
                                */
      const vd = new VirtualDocument()
      const urlSet = new Set<string>()
      async function loadDoc(url: string) {
        const res = await fetch(url)
        const data = await res.json()
        vd.load(data)
      }

      function loadPresets(...urls: string[]) {
        return Promise.all(urls.filter((url) => {
          if (urlSet.has(url))
            return false

          urlSet.add(url)

          return true
        }).map((url) => {
          if (url.endsWith('.css')) {
            const css = document.createElement('link')
            css.href = url
            css.rel = 'stylesheet'
            css.type = 'text/css'
            document.head.appendChild(css)
            return new Promise((resolve, reject) => {
              css.onload = resolve
              css.onerror = reject
            })
          }
          else {
            return import(/** @vite-ignore */url).then(module => Object.values(module).forEach((v: any) => {
              if (typeof v === 'object') {
                const { alioth, ...data } = v
                getR(Internal).import(alioth, data)
              }
            }))
          }
        }))
      }

      function load() {

      }

      app.provide(aliothVueSymbol, {

      })
    },
  }
}
