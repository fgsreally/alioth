import component from './Page.editor.vue'
import component2 from './Page.runtime.vue'

import { Renderer } from './renderer'
export const container = {
  alioth: 'widget',
  key: 'page',
  data: component,
}

// export const container2 = {
//   alioth: 'widget',
//   key: 'page',
//   data: component2,
// }
export const engine = {
  alioth: 'renderer',
  key: 'development',
  data: (data) => {
    console.log(data)
    return new Renderer(data).main().exec()
  },
  meta: {
    environment: 'editor',

  },
}
export const engine_prod: AliothRenderFn = {
  alioth: 'renderer',
  key: 'production',

  data: ({ node, scope, widget, props, doc }) => {
    if (props?.a_node === node) {
      const renderer = new Renderer(doc, node, 'runtime', widget, scope)

      return renderer.slot(['default']).main().exec()
    }
    if (props?.a_node)
      return undefined

    const renderer = new Renderer(doc, node, 'runtime', widget, scope)
    return renderer.slot(['default']).main().exec()
  },
  meta: {
    environment: 'runtime',

  },
}
