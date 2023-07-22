import {
  BaseRegister,
  interval,

} from 'alioth-lib'
import type { VirtualNode } from 'alioth-lib'

import type { VNode } from 'vue'

import { renderer } from './renderer'

export class Register extends BaseRegister<typeof renderer> {
  Renderer = renderer
  widgetMap = interval.widgetMap
  render(node: any) {
    return this.createRenderer(node)
      .slot(['default'], this.widgetMap, 'render')
      .main({
        type: 'render',
        // schema: this.meta.schema,
      })
      .addStyle({
        top: `${node.attrs.top.value}${node.attrs.top.size}`,
        left: `${node.attrs.left.value}${node.attrs.left.size}`,
        width: `${node.attrs.w.value}${node.attrs.w.size}`,
        height: `${node.attrs.h.value}${node.attrs.h.size}`,
        position: 'absolute',
      })

      .exec() as VNode
  }
}