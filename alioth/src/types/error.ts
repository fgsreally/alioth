import type { ERROR_EVENT } from '@/config'
interface FILTER {
  type: ERROR_EVENT.FILTER
  error: Error
  errorPath: string
}

export type ERROR_ARGS = FILTER
