import { Global, Tag } from 'phecda-core'
import { createEventStack } from '../core/eventStack'
import { internal } from '../core/internal'
const { register, initialize, state } = createEventStack({ undo: true, redo: true })
@Global
@Tag('event')
export class BaseEventModel {
  public state = state as any
  public register = register

  constructor() {
    internal.event = register
    initialize()
  }
}
