import type { AliothRenderFn } from 'alioth-vue'
import component from './Page.editor.vue'
import component2 from './Page.runtime.vue'

import { Renderer } from './renderer'
export const container = {
  alioth: 'widget',
  data: {
    key: 'page',
    mode: 'editor',
    component,
  },
}

export const container2 = {
  alioth: 'widget',
  data: {
    key: 'page',
    mode: 'runtime',
    component: component2,
  },
}
export const engine: AliothRenderFn = {
  alioth: 'setRenderFn',
  data: {
    mode: 'editor',
    fn: ({ node, scope, widget, props, mode }) => {
      if (props?.a_node === node) {
        const renderer = new Renderer(mode, props.a_node, widget, scope)

        return renderer.slot(['default']).main().editAction().exec()
      }
      if (props?.a_node)
        return undefined

      const renderer = new Renderer(mode, node, widget, scope)
      return renderer.slot(['default']).main().editAction().exec()
    },
  },
}
export const prod_engine: AliothRenderFn = {
  alioth: 'setRenderFn',
  data: {
    mode: 'runtime',
    fn: ({ node, scope, widget, props }) => {
      if (props?.a_node === node) {
        const renderer = new Renderer('runtime', props.a_node, widget, scope)

        return renderer.slot(['default']).main().exec()
      }
      if (props?.a_node)
        return undefined

      const renderer = new Renderer('runtime', node, widget, scope)
      return renderer.slot(['default']).main().exec()
    },
  },
}
