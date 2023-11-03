import component from './Container.vue'
import { Engine } from './engine'
export const widget_container = {
  alioth: 'widget',
  data: {
    key: 'root',
    category: '',
    component,
  },
}

export const engine_ = {
  alioth: 'setEngine',
  data: Engine,
}
