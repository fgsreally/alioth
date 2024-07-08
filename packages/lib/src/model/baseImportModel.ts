import { Global, Init, Tag } from 'phecda-core'
import { createConnector } from '../core/connect'
import { loadStyleOrScript } from '../core/load'
import { internal } from '../core/internal'

export const { connect, dynamicImport, urlMap, projectMap } = createConnector()
@Global
@Tag('import')
export class BaseImportModel {
  record: Record<string, any> = {}

  @Init
  private _init() {
    internal.registerMethod('update', (url: string, module: any) => {
      // vite hmr will cause xx?t=xx
      this.record[url.split('?')[0]] = this.importModule(module)
    })
  }

  async connectVite(url: string) {
    await connect(url)
    for (const [project, entries] of projectMap.entries()) {
      for (const entry in entries) {
        const { module, url } = (await dynamicImport(project, entry))!

        this.record[url] = this.importModule(module)
      }
    }
  }

  async connectPresets(presets: string[]) {
    presets.forEach(async (url) => {
      try {
        const module = await loadStyleOrScript(url)
        if (!url.endsWith('.css'))
          this.record[url] = this.importModule(module)
        else this.record[url] = {}
      }
      catch (e) {
        internal.invoke('error', `load dependence "${url}" failed`)
      }
    })
  }

  importModule(module: Record<string, any>) {
    const exportsMap = {} as Record<string, any>
    for (const exports in module) {
      if (typeof module[exports] === 'object' && module[exports].alioth) {
        const { alioth: type, data } = module[exports]
        internal.import(type, data)
        exportsMap[exports] = module[exports]
      }
    }
    return exportsMap
  }

  // setState: (param: { key: string; value: any; meta: any }) => void
}
