import { ref } from 'vue'
import type { AliothEventStack, AliothWidget } from 'alioth-vue'
import { useR } from 'phecda-vue'
import HW from './components/HelloWorld.vue'
import Input from './components/Input.vue'
import { Engine } from './engine/engine'
import 'alioth-preset-elementplus/dist/style.css'

// console.log('entry')
// export const register_test = {
//   alioth: 'setEngine',
//   data: Engine,
// }
const c = ref(1)
export const state_c = {
  alioth: 'state',
  data: {
    key: 'c',
    value: c,
  },
}

export const state_changeC = {
  alioth: 'state',
  data: {
    key: 'changeC',
    value: function changeC() {
      c.value++
    },
  },
}

export const widget_a: AliothWidget = {
  alioth: 'widget',
  data: {
    category: 'lib',
    key: 'a',
    component: HW,
    meta: {
      props: {
        msg: {
          _component: 'Input',
          _formItem: { label: '绑定数据' },
        },
      },
      events: {
        onClick: {
          _component: 'Input',
          _formItem: { label: '绑定事件' },
        },
      },
    },
  },
}

export const event_test: AliothEventStack = {
  alioth: 'eventStack',
  data: {
    keyboard: 'ctrl+a',
    name: 'show-material',
    execute() {
      const { zones } = useR(window.__PHECDA__.view)
      const zone = zones.find(item => item.name === 'Material')
      zone.hidden = !zone.hidden
    },
    pushQueue: false,
  },
}
export * from 'alioth-preset-elementplus'
// export * from 'alioth-preset-layout/grid'
