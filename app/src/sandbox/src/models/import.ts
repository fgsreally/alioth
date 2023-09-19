import { Init, useV } from 'phecda-vue'
import { BaseImportModel, interval } from 'alioth-vue'
import { ChannelModel } from './channel'

export class ImportModel extends BaseImportModel {
  /**
   * @extend
   */
  presets: string[] = []
  info: Record<string, any> = {}

  @Init
  async init() {
    const { add } = useV(ChannelModel)

    add('import', async ({ url, presets }: { url: string; presets: string[] }) => {
      if (url)
        await this.connectVite(url)
      this.presets = presets
      await this.connectPreset(presets)
    })
  }

  setState({ key, value }: { key: string; value: any; meta: any }) {
    interval.setState(key, value)
  }
}
