import { useO } from 'phecda-vue'
import { init, setRegister } from 'alioth-lib'
import { ConnectState } from './connect'
import { ConfigState } from './config'
import { Register } from '@/engine/register'
export function initState() {
  init()
  setRegister(Register)
  useO(ConnectState)
  useO(ConfigState)
}
