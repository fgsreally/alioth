import { Watcher } from 'phecda-core'

export interface ErrorHandler {
  info: string
  handler: (e: Error) => void
}

export abstract class BaseErrorModel {
  abstract errorHandlers: ErrorHandler[]

  constructor() {
    window.$alioth_error = this.setErrorHandler.bind(this)
  }

  setErrorHandler(handler: ErrorHandler) {
    this.errorHandlers.push(handler)
  }

  @Watcher('custom_error')
  watchError({ error, info }: { error: Error; info: string }) {
    const handler = this.errorHandlers.find(item => item.info === info)
    if (handler)
      handler.handler(error)

    else
      console.error(`[Alioth]: ${info}`)
  }
}
