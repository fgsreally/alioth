import {
  BaseRegister,
  interval,
} from 'alioth-lib'
import type { VirtualNode } from 'alioth-lib'
import type { VNode } from 'vue'
import { h } from 'vue'
import { renderer } from './renderer'

export class Register extends BaseRegister<typeof renderer> {
  Renderer = renderer
  widgetMap = interval.widgetMap
  text() {
    return h('p', {
      class: 'preview-text',
    }, this.key)
  }

  edit(node: VirtualNode<any>) {
    const renderer = this.createRenderer(node)
    return renderer
      .slot(['default', 'header'], this.widgetMap, 'edit')
      .main({
        type: 'edit',
        schema: this.meta.schema,
      })
      .getSize()
      .addClass('innerBlock_edit')
      .useSize()
      .draggable()
      .addClass('block_edit')
      .useOffset()
      .editAction()
      .exec()
  }

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

  code() {

  }
}
