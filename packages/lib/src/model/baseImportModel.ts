import { createConnector } from '../core/connect'
import { loadStyleOrScript } from '../core/invoke'

export const { connect, dynamicImport, urlMap, projectMap } = createConnector()

export abstract class BaseImportModel {
  /**
   * @extend
   */
  info: Record<string, any> = {}
  graph: Record<string, any> = {}

  constructor() {
    window.$alioth_update = (url: string, module: any) => {
      this.graph[url] = this.importModule(module)
    }
    window.$alioth_state = this.setState.bind(this)
  }

  async connectVite(url: string) {
    await connect(url)
    for (const [project, entries] of projectMap.entries()) {
      for (const entry in entries) {
        const data = await dynamicImport(project, entry)

        this.importModule(data!.module)
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
        window.$alioth_error('LoadError', `load dependence ${url} failed`)
      }
    })
  }

  importModule(module: Record<string, any>) {
    const exportsMap = {} as Record<string, any>
    for (const exports in module) {
      if (typeof module[exports] === 'object' && module[exports].alioth) {
        const { alioth: type, data } = module[exports]
        // @ts-expect-error import module
        window[`$alioth_${type}`]?.(data)
        exportsMap[exports] = module[exports]
      }
    }
    return exportsMap
  }

  abstract setState(param: { key: string; value: any; meta: any }): void
}
