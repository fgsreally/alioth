import { useO } from 'phecda-vue'

import { ImportModel } from './import'

import { DocModel } from './doc'
import { ChannelModel } from './channel'
export function initModel() {
  useO(ImportModel)
  useO(ChannelModel)
  useO(DocModel)
}
