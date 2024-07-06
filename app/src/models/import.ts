import { Init } from 'phecda-vue'
import { BaseImportModel, internal } from 'alioth-vue'
export class ImportModel extends BaseImportModel {
  info: Record<string, any> = {}
  presets: string[]
  viteUrl: string
  @Init
  async init() {
    const { url, presets } = this.getParams()
    if (url) {
      this.viteUrl = url
      await this.connectVite(url)
    }
    this.presets = presets
    await this.connectPreset(presets)
  }

  getParams() {
    const config = new URLSearchParams(location.hash.slice(1))
    const url = decodeURIComponent(config.get('url') || '')

    const presets: string[] = JSON.parse(config.get('presets') || '[]')
    return {
      url, presets,
    }
  }

  setState = ({ key, meta, value }: { key: string; meta: any; value: any }) => {
    this.info[key] = meta
    internal.scope.add(key, { value })
  }
}
