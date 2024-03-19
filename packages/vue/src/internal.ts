import { Scope } from 'alioth-lib'
import type { Component, VNode } from 'vue'
import { markRaw, reactive } from 'vue'

import type { VirtualDocument, VirtualNode } from 'alioth-lib'

export interface Widget<M = any> {
  key: string
  component: Component
  meta: M
}

export const NameSpaceStore = reactive<{ [key: string]: ReturnType<typeof createNameSpace> }>({})

export function createNameSpace() {
  // 分区注册
  const widgetMap: Map<string, Widget> = reactive(new Map())
  return {
    widgetMap,
    cancel: (key: string) => {
      widgetMap.delete(key)
    },
    get(key: string) {
      return widgetMap.get(key)
    },

    register: (module: Widget) => {
      widgetMap.set(module.key, module)
    },
  }
}

export function getNamespace(mode: string) {
  if (!NameSpaceStore[mode])
    NameSpaceStore[mode] = createNameSpace()
  return NameSpaceStore[mode] as unknown as ReturnType<typeof createNameSpace>
}

export const renderFnMap = new Map<string, RenderFn>()

export function setRenderFn(mode: string, fn: RenderFn) {
  renderFnMap.set(mode, fn)
}

export type RenderFn = (arg: {
  doc: VirtualDocument
  mode: string
  node: VirtualNode
  widget: Widget
  scope: Scope
}) => VNode | (VNode | undefined)[] | undefined

export const internal = {
  widgetNamespace: NameSpaceStore,
  scope: new Scope(),
  mode: 'editor',

  renderFnMap,
  getWidget,
} as unknown as {
  scope: Scope
  mode: string
  getWidget: typeof getWidget
  widgetNamespace: typeof NameSpaceStore
  renderFnMap: typeof renderFnMap
}
export async function init(mode = 'editor') {
  if (window.$alioth_internal)
    return
  internal.mode = mode

  window.$alioth_widget = registerWidget
  window.$alioth_setRenderFn = ({ mode, fn }: { mode: string; fn: RenderFn }) => setRenderFn(mode, fn)
  window.$alioth_internal = internal
  window.$alioth_state = ({ key, value, meta }: any) => {
    internal.scope.add(key, { value, meta })
  }
}

export function registerWidget(
  { mode = 'default', key, component, meta }: {
    mode?: string
    key: string
    component: Component
    meta?: any
  },
) {
  getNamespace(mode).register?.(markRaw({
    key, component, meta,
  }))
}

export function setMode(mode: string) {
  internal.mode = mode
}

export function getWidget(key: string, mode = internal.mode) {
  console.log(NameSpaceStore, mode)
  return NameSpaceStore[mode]?.get(key) || NameSpaceStore.default.get(key)
}

export function getRenderFn(mode = internal.mode) {
  return renderFnMap.get(mode)
}
