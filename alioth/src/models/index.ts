import { useO } from 'phecda-vue'
import { init, setRegister } from 'alioth-lib'
import { ConnectModel } from './connect'
import { ConfigModel } from './config'
import { DragModel } from './drag'
import { DocModel } from './doc'
import { CommandModel } from './command'
import { ErrorModel } from './error'
import { Register } from '@/engine/register'
export function initState() {
  init()
  setRegister(Register)
  useO(ConnectModel)
  useO(ConfigModel)
  useO(DragModel)
  useO(DocModel)
  useO(CommandModel)
  useO(ErrorModel)
}
