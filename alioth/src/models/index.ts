import { useO } from 'phecda-vue'
import { ImportState } from './import'
import { ConfigState } from './config'

export function initState() {
  useO(ImportState)
  useO(ConfigState)
}
