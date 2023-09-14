import {
  BaseRegister,
  interval,

} from 'alioth-lib'

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
        top: `${node.attrs.top}px`,
        left: `${node.attrs.left}px`,
        width: `${node.attrs.width}px`,
        height: `${node.attrs.height}px`,
        position: 'absolute',
      })

      .exec() as VNode
  }
}
