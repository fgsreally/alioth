import type { AliothRenderFn } from 'alioth-vue'
import component from './Container.vue'
import { Renderer } from './renderer'

export const engine: AliothRenderFn = {
  alioth: 'setRenderFn',
  data: {
    mode: 'edit',
    fn: ({ node, scope, widget }) => {
      const renderer = new Renderer('edit', node, widget, scope)
      if (node.parent!.id === 'root')
        return renderer.slot(['default']).main().exec()

      return renderer
        .slot(['default'])
        .main()
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
    },
  },
}

export const container = {
  alioth: 'widget',
  data: {
    key: 'page',
    category: '',
    component,
  },
}
