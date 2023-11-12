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

  edit(node: VirtualNode<any>, { scope }: any) {
    const renderer = this.createRenderer(node, 'edit')

    if (node.parent!.parent?.id === 'root') {
      if (node.attrs.propsData.vfor && node.attrs.propsData.vfor in scope) {
        const key = node.attrs.propsData.vfor
        const vnode = Object.entries(scope[key]).map(([k, v]: any) => {
          return this.createRenderer(node, 'edit').slot(['default'], this.widgetMap, {
            ...scope,
            [`${key}Item`]: v,
            [`${key}Index`]: k,

          })
            .main('edit', {
              ...scope,
              [`${key}Item`]: v,
              [`${key}Index`]: k,

            }, k)
            .addClass('innerBlock_edit')
            .grid()
            .editAction()
            .exec()
        })
        return vnode
      }
      return renderer.slot(['default'], this.widgetMap, scope)
        .main('edit', scope)
        .addClass('innerBlock_edit')
        .grid()
        .editAction()
        .exec()
    }

    return renderer.slot(['default'], this.widgetMap, scope).main('edit', scope).addStyle({ pointerEvents: 'auto' }).editAction()
      .exec()
  }

  render(node: any) {
    const renderer = this.createRenderer(node)

    if (node.parent?.parent?.id === 'root') {
      return renderer
        .slot(['default'], this.widgetMap, 'render')
        .main('render')
        .grid()
        .exec()
    }

    return renderer.slot(['default'], this.widgetMap, 'render').main('render').exec()
  }

  code() {

  }
}
