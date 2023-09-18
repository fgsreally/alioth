import { Global, Init, Tag } from 'phecda-core'
import { createEventStack } from '../core/eventStack'
const { register, initialize, state } = createEventStack({ undo: true, redo: true })
@Global
@Tag('event')
export class BaseEventModel {
  public state = state as any
  public register = register
  @Init
  private _init() {
    window.$alioth_eventStack = register
    initialize()
  }
}
