import { Global, Init, Tag } from 'phecda-core'
import { createConnector } from '../core/connect'
import { loadStyleOrScript } from '../core/load'
import { internal } from '../core/internal'

export const { connect, dynamicImport, urlMap, projectMap } = createConnector()
@Global
@Tag('import')
export class BaseImportModel {
  graph: Record<string, any> = {}

  @Init
  private _init() {
    internal.update = (url: string, module: any) => {
      // vite hmr will cause xx?t=xx
      this.graph[url.split('?')[0]] = this.importModule(module)
    }
  }

  async connectVite(url: string) {
    await connect(url)
    for (const [project, entries] of projectMap.entries()) {
      for (const entry in entries) {
        const { module, url } = (await dynamicImport(project, entry))!

        this.graph[url] = this.importModule(module)
      }
    }
  }

  async connectPreset(presets: string[]) {
    presets.forEach(async (url) => {
      try {
        const module = await loadStyleOrScript(url)
        if (!url.endsWith('.css'))
          this.graph[url] = this.importModule(module)
        else this.graph[url] = {}
      }
      catch (e) {
        internal.error('LoadError', `load dependence ${url} failed`)
      }
    })
  }

  importModule(module: Record<string, any>) {
    const exportsMap = {} as Record<string, any>
    for (const exports in module) {
      if (typeof module[exports] === 'object' && module[exports].alioth) {
        const { alioth: type, data } = module[exports]
        internal[type]?.(data)
        exportsMap[exports] = module[exports]
      }
    }
    return exportsMap
  }

  // setState: (param: { key: string; value: any; meta: any }) => void
}
