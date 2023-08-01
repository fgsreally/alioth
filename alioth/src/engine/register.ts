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

  preview() {
    const renderer = this.createRenderer()
    const VirtualNode = renderer
      .main()
      .useClass('block_preview')
      .response(200, 500)
      .exec()
    return VirtualNode as VNode
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
      // .addClass(getBreakPointClass(node))
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
        top: `${node.attrs.top.value}${node.attrs.top.size}`,
        left: `${node.attrs.left.value}${node.attrs.left.size}`,
        width: `${node.attrs.w.value}${node.attrs.w.size}`,
        height: `${node.attrs.h.value}${node.attrs.h.size}`,
        position: 'absolute',
      })

      .exec() as VNode
  }

  code() {

  }
}
