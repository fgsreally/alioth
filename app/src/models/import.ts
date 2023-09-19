import { Init, useV } from 'phecda-vue'
import { BaseImportModel, interval } from 'alioth-vue'
import { getQuery } from '@/utils/url'
export class ImportModel extends BaseImportModel {
  info: Record<string, any> = {}
  presets: string[]
  @Init
  async init() {
    const { url, presets } = this.getParams()
    if (url)
      await this.connectVite(url)
    this.presets = presets
    await this.connectPreset(presets)
    // useV(ChannelModel).add('import', this.setInfo.bind(this))
  }

  getParams() {
    const url = decodeURIComponent(getQuery('url') || '')

    const presets: string[] = JSON.parse(getQuery('presets') || '[]')
    return {
      url, presets,
    }
  }

  setState({ key, meta, value }: { key: string; meta: any; value: any }) {
    this.info[key] = meta
    interval.setState(key, value)
  }
}
