import { useO } from 'phecda-vue'
import { ConnectState } from './connect'
import { ConfigState } from './config'

export function initState() {
  useO(ConnectState)
  useO(ConfigState)
}
