import type { AliothView, AliothZone } from 'alioth-vue'
import { useR } from 'phecda-vue'
import TestVue from './Test.vue'

export { container, engine, prod_engine } from 'alioth-preset-layout/draggable/index.ts'

export const zone_test: AliothZone = {
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

export const view_test: AliothView = {
  alioth: 'view',
  data: {
    component: TestVue,
    key: 'test',
  },
}
