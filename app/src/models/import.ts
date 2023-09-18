import { Init } from 'phecda-vue'
import { BaseImportModel, createConnector, interval } from 'alioth-vue'
import { getQuery } from '@/utils/url'

export const { connect, dynamicImport, urlMap, projectMap } = createConnector()

export class ImportModel extends BaseImportModel {
  /**
   * @extend
   */
  presets: string[] = []
  info: Record<string, any> = {}

  @Init
  async init() {
    const url = decodeURIComponent(getQuery('url') || '')

    if (url)
      await this.connectVite(url)
    const presets: string[] = JSON.parse(getQuery('presets') || '[]')
    this.presets = presets
    await this.connectPreset(presets)
  }

  setState({ key, value, meta }: { key: string; value: any; meta: any }) {
    interval.setState(key, value)
    this.info[key] = meta
  }
}
