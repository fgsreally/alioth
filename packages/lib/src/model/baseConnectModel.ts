import { Global, Init, Tag } from 'phecda-core'
import { createViteConnector } from '../utils/connector'
import { loadStyleOrScript } from '../utils/load'
import { Internal } from './internal'

export const { connect, dynamicImport, urlMap, projectMap } = createViteConnector()
/**
 * connect client and vite dev server
 */
@Global
@Tag('connect')
export class BaseConnectModel {
  record: Record<string, any> = {}
  viteUrl: string
  presets: string[]
  constructor(protected internal: Internal) {

  }

  @Init
  private async _init() {
    this.internal.registerMethod('hmr', (url: string, module: any) => {
      // vite hmr will cause xx?t=xx
      this.record[url.split('?')[0]] = this.importModule(module)
    })
  }

  async connectVite(url: string) {
    if (this.viteUrl)
      return
    this.viteUrl = url
    await connect(url)
    for (const [project, entries] of projectMap.entries()) {
      for (const entry in entries) {
        const { module, url } = (await dynamicImport(project, entry))!

        this.record[url] = this.importModule(module)
      }
    }
  }

  async connectPresets(presets: string[]) {
    return Promise.all(presets.map(async (url) => {
      try {
        if (this.presets.includes(url))
          return
        this.presets.push(url)
        const module = await loadStyleOrScript(url)
        if (!url.endsWith('.css'))
          this.record[url] = this.importModule(module)
        else this.record[url] = {}
      }
      catch (e) {
        this.internal.invoke('error', `load dependence "${url}" failed`)
      }
    }))
  }

  importModule(module: Record<string, any>) {
    const exportsMap = {} as Record<string, any>
    for (const exports in module) {
      if (typeof module[exports] === 'object' && module[exports].alioth) {
        const { alioth: type, ...data } = module[exports]
        this.internal.import(type, data)
        exportsMap[exports] = module[exports]
      }
    }
    return exportsMap
  }

  async generateFiles(files: Record<string, string>) {
    if (!this.viteUrl)
      throw new Error('must connect vite dev server before generateFile')
    await fetch(new URL('/alioth/action', this.viteUrl).href, {
      method: 'POST',
      body: JSON.stringify({
        type: 'geneateFiles',
        files,
      }),
    })
  }

  async bundleFiles(entry: Record<string, string>) {
    if (!this.viteUrl)
      throw new Error('must connect vite dev server before bundleFiles')
    await fetch(new URL('/alioth/action', this.viteUrl).href, {
      method: 'POST',
      body: JSON.stringify({
        type: 'bundle',
        entry,
      }),
    })
  }
  // setState: (param: { key: string; value: any; meta: any }) => void
}
