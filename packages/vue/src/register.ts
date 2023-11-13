import type { Component, VNode } from 'vue'
import { reactive } from 'vue'

import type { VirtualNode } from 'alioth-lib/*'
import type { Scope } from './interval'

export interface Widget<M = any> {
  category: string
  key: string
  component: Component
  meta: M
}

export const allWidgetMap = reactive(new Map()) as Map<string, Widget>
export const NameSpaceStore = reactive<{ [key: string]: ReturnType<typeof createNameSpace> }>({})

export function getWidget(key?: string) {
  if (key)
    return allWidgetMap.has(key) ? (allWidgetMap as Map<string, Widget>).get(key) : null
}

export function createNameSpace() {
  // 分区注册
  const widgetMap: Map<string, Widget> = reactive(new Map())
  return {
    widgetMap,
    cancel: (key: string) => {
      const comp = allWidgetMap.get(key)
      if (comp) {
        widgetMap.delete(key)
        allWidgetMap.delete(key)
      }
    },
    getWidget(key: string) {
      return widgetMap.get(key)
    },

    register: (module: Widget) => {
      widgetMap.set(module.key, module)
      allWidgetMap.set(module.key, module)
    },
  }
}

export function getNamespace(key: string) {
  if (!NameSpaceStore[key])
    NameSpaceStore[key] = createNameSpace()
  return NameSpaceStore[key] as unknown as ReturnType<typeof createNameSpace>
}

export const renderFnMap = new Map<string, RenderFn>()

export function setRenderFn(mode: string, fn: RenderFn) {
  renderFnMap.set(mode, fn)
}
export function getRenderFn(mode: string) {
  return renderFnMap.get(mode)
}

export type RenderFn = (arg: {
  node: VirtualNode<any>
  widget: Widget
  scope: Scope
  props?: any
}) => VNode | VNode[] | undefined
