import { Init } from 'phecda-vue'
import { createConnector, interval } from 'alioth-lib'
import { getQuery } from '@/utils/url'

export const { connect, dynamicImport, urlMap, projectMap } = createConnector()

export class ConnectModel {
  /**
   * @extend
   */
  info: Record<string, any> = {}

  @Init
  async init() {
    window.$alioth_register = this.updateModule.bind(this)
    const url = decodeURIComponent(getQuery('url') || '')
    if (url) {
      await connect(url)
      for (const [project, entries] of projectMap.entries()) {
        for (const entry in entries)
          await dynamicImport(project, entry)
      }
    }
  }

  updateModule(key: string, value: any, meta: any) {
    interval.setState(key, value)

    this.info[key] = meta
  }
}
