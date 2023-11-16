import type { AliothRenderFn } from 'alioth-vue'
import { toRaw } from 'vue'
import component from './Container.vue'
import { Renderer } from './renderer'
export const container = {
  alioth: 'widget',
  data: {
    key: 'page',
    category: '',
    component,
  },
}

export const engine: AliothRenderFn = {
  alioth: 'setRenderFn',
  data: {
    mode: 'edit',
    fn: ({ node, scope, widget }) => {
      const renderer = new Renderer('edit', node, widget, scope)
      if (node.parent!.parent?.id === 'root') {
        if (node.attrs.propsData.vfor && scope.keys.includes(node.attrs.propsData.vfor)) {
          const key = node.attrs.propsData.vfor

          const vnode = Object.entries(toRaw(scope.data[key])).map(([k, v]: any) => {
            return new Renderer('edit', node, widget, scope.create({
              [`${key}Item`]: {
                from: node.id,
                value: v,
              },
              [`${key}Index`]: {
                from: node.id,
                value: k,
              },
            })).slot(['default'])
              .main(k)
              .addClass('innerBlock_edit')
              .grid()
              .editAction()
              .exec()
          })
          return vnode
        }
        return renderer.slot(['default'])
          .main()
          .addClass('innerBlock_edit')
          .grid()
          .editAction()
          .exec()
      }

      return renderer.slot(['default']).main().addStyle({ pointerEvents: 'auto' }).editAction()
        .exec()
    },
  },
}
