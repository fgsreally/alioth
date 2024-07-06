import { VirtualNode } from 'alioth-lib'
import { Component, VNode } from 'vue'

export namespace Alioth {

  export interface Export {
    mode: string
    key: string
    data: any
    meta: any
  }

  export interface State<Data extends Record<string, any> = Record<string, any>> extends Export {
    data: Data
  }

  export interface Widget<Widget = Component> extends Export {
    data: Widget
  }

  export interface Renderer extends Export {
    data: (param: { node: VirtualNode; widget: Component; mode: string }) => VNode
  }
}
