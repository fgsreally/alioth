import { useO } from 'phecda-vue'
import { init, setRegister } from 'alioth-lib'
import { ImportModel } from './import'
import { ConfigModel } from './config'
import { DragModel } from './drag'
import { DocModel } from './doc'
import { EventModel } from './event'
import { ErrorModel } from './error'
import { Register } from '@/engine/register'
export function initState() {
  init()
  setRegister(Register)
  useO(ImportModel)
  useO(ConfigModel)
  useO(DragModel)
  useO(DocModel)
  useO(EventModel)
  useO(ErrorModel)
}
