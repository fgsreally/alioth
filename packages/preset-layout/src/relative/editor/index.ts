import component from './Container.vue'
import { Engine } from './engine'

export const engine = {
  alioth: 'setEngine',
  data: Engine,
}

export const container = {
  alioth: 'widget',
  data: {
    key: 'root',
    category: '',
    component,
  },
}
