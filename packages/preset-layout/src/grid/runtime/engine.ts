import {
  BaseEngine,
} from 'alioth-vue'

import { renderer } from './renderer'
export class Engine extends BaseEngine<typeof renderer> {
  Renderer = renderer
  widgetMap = $alioth_interval.widgetMap

  render(node: any) {
    const renderer = this.createRenderer(node)

    if (node.parent!.parent!.id === 'root') {
      return renderer
        .slot(['default'], this.widgetMap, 'render')
        .main('render')
        .grid()
        .exec()
    }

    return renderer.slot(['default'], this.widgetMap, 'render').main('render').exec()
  }
}
