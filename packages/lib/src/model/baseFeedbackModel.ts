/* eslint-disable @typescript-eslint/no-unused-vars */
import { Global, Init, Tag } from 'phecda-core'
import { Internal } from './internal'

export interface ErrorHandler {
  type: string
  handler: (e: Error) => void
}

@Global
@Tag('feedback')
export class BaseFeedbackModel {
  constructor(protected internal: Internal) {

  }

  @Init

  init() {
    (['error', 'warn', 'debug', 'log', 'info'] as const).forEach((item) => {
      this.internal.registerMethod(item, (...arg) => {
        // @ts-expect-error can overwrite method , to support flexible parameters
        this[item](...arg)
      })
    })
  }

  error(msg: string) {

  }

  warn(msg: string) {

  }

  log(msg: string) {

  }

  info(msg: string) {

  }

  debug(msg: string) {

  }
}
