import { createFilter } from 'phecda-vue'
import { type BaseEngine, allWidgetMap } from './register'

const { filter, data, setState } = createFilter({})

export const interval = {
  filter,
  data,
  setState,
  widgetMap: allWidgetMap,
} as unknown as {
  filter: typeof filter
  data: typeof data
  setState: typeof setState
  docData: any
  widgetMap: typeof allWidgetMap
  engine: typeof BaseEngine<any, any>
}
