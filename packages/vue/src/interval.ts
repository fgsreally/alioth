import { Scope } from 'alioth-lib'
import { allWidgetMap, renderFnMap } from './register'

export const interval = {
  widgetMap: allWidgetMap,
  scope: new Scope(),
  renderFnMap,
} as unknown as {
  docData: any
  scope: Scope
  widgetMap: typeof allWidgetMap
  renderFnMap: typeof renderFnMap
}
