import {
  BaseEngine,
} from 'alioth-vue'
import type { VirtualNode } from 'alioth-vue'
import type { VNode } from 'vue'
import { h } from 'vue'
import { renderer } from './renderer'

export class Engine extends BaseEngine<typeof renderer> {
  Renderer = renderer
  widgetMap = $alioth_interval.widgetMap
  text() {
    return h('p', {
      class: 'preview-text',
    }, this.key)
  }

  edit(node: VirtualNode<any>) {
    const renderer = this.createRenderer(node)
    if (node.parent!.id === 'root')
      return renderer.slot(['default'], this.widgetMap, 'edit').main('edit').exec()

    return renderer
      .slot(['default'], this.widgetMap, 'edit')
      .main('edit')
      .getSize()
      .addClass('innerBlock_edit')
      .useSize()
      .draggable()
      .addStyle({
        position: 'relative',
        pointerEvents: 'auto',
        width: 'fit-content',
        userSelect: 'contain',
        zIndex: '10',
      })
      .useOffset()
      .editAction()
      .exec()
  }

  render(node: any) {
    return this.createRenderer(node)
      .slot(['default'], this.widgetMap, 'render')
      .main('render')
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
