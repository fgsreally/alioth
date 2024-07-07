import { useR } from 'phecda-vue'
import TestVue from './Test.vue'

export { container, engine, engine_prod } from './engine'

export const zone_test = {
  alioth: 'zone',
  data: {
    component: 'test',
    label: '事件',
    name: 'Event',
    isActive: () => {
      return !!useR(__PHECDA__.selection).selectNode
    },
    props: {
      type: 'events',
      x: 600,
      y: 600,
      transition: 'left',
      hidden: false,
    },
  },
}

export const view_test = {
  alioth: 'component',
  data: {
    component: TestVue,
    key: 'test',
  },
}
