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
