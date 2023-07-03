import { createFilter } from 'phecda-vue'
import type { BaseRegister } from './register'

const { filter, data, setState } = createFilter({})

export const interval = {
  filter,
  data,
  setState,
} as unknown as {
  filter: typeof filter
  data: typeof data
  setState: typeof setState
  docData: any
  register: typeof BaseRegister<any, any>
}
