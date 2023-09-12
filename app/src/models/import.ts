import { Init, emitter } from 'phecda-vue'
import { createConnector, interval, loadStyleOrScript } from 'alioth-lib'
import { getQuery } from '@/utils/url'

export const { connect, dynamicImport, urlMap, projectMap } = createConnector()

export class ImportModel {
  /**
   * @extend
   */
  presets: string[] = []
  info: Record<string, any> = {}
  graph: Record<string, any> = {}
  @Init
  async init() {
    window.$alioth_state = this.setState.bind(this)
    window.$alioth_update = (url: string, module: any) => {
      this.graph[url] = this.importModule(module)
    }
    const url = decodeURIComponent(getQuery('url') || '')

    if (url) {
      await connect(url)
      for (const [project, entries] of projectMap.entries()) {
        for (const entry in entries) {
          const data = await dynamicImport(project, entry)

          this.importModule(data!.module)
        }
      }
    }
    const presets: string[] = JSON.parse(getQuery('presets') || '[]')
    this.presets = presets
    presets.forEach(async (url) => {
      try {
        const module = await loadStyleOrScript(url)
        if (!url.endsWith('.css'))
          this.graph[url] = this.importModule(module)
        else this.graph[url] = {}
      }
      catch (e) {
        emitter.emit('error', `load dependence ${url} failed`)
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

  setState({ key, value, meta }: { key: string; value: any; meta: any }) {
    interval.setState(key, value)

    this.info[key] = meta
  }
}
