import type { VirtualNode } from 'alioth-vue'
import {
  BaseEngine,
} from 'alioth-vue'

import { renderer } from './renderer'
export class Engine extends BaseEngine<typeof renderer> {
  Renderer = renderer
  widgetMap = $alioth_interval.widgetMap

  render(node: VirtualNode<any>, slot?: any) {
    if (slot?.a_node === node) {
      const renderer = this.createRenderer(slot.a_node)

      return renderer.slot(['default'], this.widgetMap, 'render').main('render').exec()
    }
    if (slot?.a_node)

      return null

    const renderer = this.createRenderer(node)
    return renderer.slot(['default'], this.widgetMap, 'render').main('render').exec()
  }
}
