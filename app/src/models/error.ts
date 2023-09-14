import { Global, Tag, Watcher } from 'phecda-vue'
import { ERROR_EVENT } from '@/config'
import type { ERROR_ARGS } from '@/types/error'

@Global
@Tag('error')
export class ErrorModel {
  @Watcher('custom_error')
  throw(param: ERROR_ARGS) {
    switch (param.type) {
      case ERROR_EVENT.FILTER:
        return 1
    }
  }

  @Watcher('error_info')
  info(info: string) {
    console.error(info)
  }
}
