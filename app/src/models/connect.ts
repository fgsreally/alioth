import { Init } from 'phecda-vue'
import { BaseConnectModel } from 'alioth-vue'
export class ConnectModel extends BaseConnectModel {
  @Init
  private async init() {
    const config = new URLSearchParams(location.hash.slice(1))
    const url = decodeURIComponent(config.get('url') || '')

    const presets: string[] = JSON.parse(config.get('presets') || '[]')

    if (url)
      await this.connectVite(url)

    if (presets.length)
      await this.connectPresets(presets)
  }
}
