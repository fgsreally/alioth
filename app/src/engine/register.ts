import {
  BaseRegister,
  interval,
} from 'alioth-vue'
import type { VirtualNode } from 'alioth-vue'
import type { VNode } from 'vue'
import { h } from 'vue'
import { renderer } from './renderer'

export class Register extends BaseRegister<typeof renderer> {
  Renderer = renderer
  widgetMap = interval.widgetMap
  text() {
    // @ts-expect-error  types mistake
    return h('p', {
      class: 'preview-text',
    }, this.key)
  }

  edit(node: VirtualNode<any>) {
    console.log(node)
    const renderer = this.createRenderer(node)
    if (node.attrs.page) {
      return renderer.slot(['default'], this.widgetMap, 'edit').main({
        type: 'edit',
        schema: this.meta.schema,
      }).exec()
    }

    return renderer
      .slot(['default'], this.widgetMap, 'edit')
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
        schema: this.meta.schema,
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
