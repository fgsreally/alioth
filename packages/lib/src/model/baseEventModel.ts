import { Global, Tag } from 'phecda-core'
import { createEventStack } from '../core/eventStack'
const { register, initialize, state } = createEventStack({ undo: true, redo: true })
@Global
@Tag('event')
export class BaseEventModel {
  public state = state as any
  public register = register

  constructor() {
    window.$alioth_eventStack = register
    initialize()
  }
}
