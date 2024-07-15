import type { Scope, VirtualNode } from 'alioth-lib'
import type { AppContext, Component, VNode } from 'vue'

export namespace AliothVue {

  export interface Export {
    alioth: string
    mode: string
    key: string
    data: any
    meta: any
  }

  export interface State<Data extends Record<string, any> = Record<string, any>> extends Export {
    data: Data
  }

  export interface Widget extends Export {
    data: Component
  }

  export interface Renderer extends Export {
    data: (param: {
      node: VirtualNode
      widget: Widget
      environment: string
      scope: Scope
      renderer: string
      appContext: AppContext
    }) => VNode
  }
}
