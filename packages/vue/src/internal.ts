import { Scope, Store } from 'alioth-lib'
import type { Component, VNode } from 'vue'

import type { VirtualNode } from 'alioth-lib'

export interface Widget<M = any> {
  key: string
  component: Component
  meta: M
}

export type RenderFn = (arg: {
  node: VirtualNode
  widget: Widget
  scope: Scope
}) => VNode | (VNode | undefined)[] | undefined

export const internal = {
  widgetStore: new Store('widget'),
  componentStore: new Store('component'),
  stateStore: new Store('state'),
  renderFnStore: new Store('renderFn'),
} as unknown as {
  widgetStore: Store<Widget>
  componentStore: Store<{ key: string;component: Component }>
  stateStore: Store
  renderFnStore: Store<RenderFn>
  [key: string]: any
}
export async function initAlioth() {
  if (window.$alioth_internal)
    return
  window.$alioth_internal = internal
}
