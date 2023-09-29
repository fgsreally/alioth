import component from './Container.vue'
import { Engine } from './engine'

export const engine_ = {
  alioth: 'setEngine',
  data: Engine,
}

export const widget_container = {
  alioth: 'widget',
  data: {
    key: 'root',
    category: '',
    component,
  },
}
