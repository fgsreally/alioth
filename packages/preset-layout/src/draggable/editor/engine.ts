import {
  BaseEngine,
} from 'alioth-vue'
import type { VirtualNode } from 'alioth-vue'
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

  edit(node: VirtualNode<any>, slot?: any) {
    if (slot?.a_node === node) {
      const renderer = this.createRenderer(slot.a_node)

      return renderer.slot(['default'], this.widgetMap, 'edit').main('edit').editAction().exec()
    }
    if (slot?.a_node)

      return null

    const renderer = this.createRenderer(node)
    return renderer.slot(['default'], this.widgetMap, 'edit').main('edit').editAction().exec()
  }

  // render(node: any) {
  //   const renderer = this.createRenderer(node)

  //   if (node.parent!.parent!.id === 'root') {
  //     return renderer
  //       .slot(['default'], this.widgetMap, 'render')
  //       .main('render')
  //       .grid()
  //       .exec()
  //   }

  //   return renderer.slot(['default'], this.widgetMap, 'render').main('render').exec()
  // }

  code() {

  }
}
