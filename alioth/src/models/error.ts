import { Global, Tag, Watcher } from 'phecda-vue'
import { ERROR_EVENT } from '@/config'
import type { ERROR_ARGS } from '@/types/error'

@Global
@Tag('error')
export class ErrorModel {
  @Watcher('custom_error')
  throw(param: ERROR_ARGS) {
    console.log('error', param)
    switch (param.type) {
      case ERROR_EVENT.FILTER:
        return 1
    }
  }
}
