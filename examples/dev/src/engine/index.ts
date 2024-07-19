import { ComponentRenderer } from 'alioth-vue'
import { Mixin } from 'phecda-vue'
import component from './test.vue'
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

class R extends Mixin(Renderer, ComponentRenderer) {
  exec() {
    this.slot(['default']).main().editAction().gridstack()
  }
}

export const engine = {
  alioth: 'renderer',
  key: 'development',
  data: R,
  meta: {
    environment: 'editor',
  },
}
