import { Global, Tag, Watcher } from 'phecda-core'

export interface ErrorHandler {
  type: string
  handler: (e: Error) => void
}

@Global
@Tag('error')
export class BaseErrorModel {
  errorHandlers: ErrorHandler[]

  setErrorHandler(handler: ErrorHandler) {
    this.errorHandlers.push(handler)
  }

  @Watcher('custom_error')
  watchError({ error, type }: { error: Error; type: string }) {
    const handler = this.errorHandlers.find(item => item.type === type)
    if (handler)
      handler.handler(error)

    else
      console.error(`[Alioth]: ${type}`)
  }
}
