import { useO } from 'phecda-vue'
import { init, setRegister } from 'alioth-lib'
import { ConnectState } from './connect'
import { ConfigState } from './config'
import { DragState} from './drag'
import {DocState} from './doc'
import {CommandState} from './command'
import { Register } from '@/engine/register'
export function initState() {
  init()
  setRegister(Register)
  useO(ConnectState)
  useO(ConfigState)
  useO(DragState)
  useO(DocState)
  useO(CommandState)
}
