import { ref } from 'vue'
import type { AliothWidget } from 'alioth-vue'
import HW from './components/HelloWorld.vue'
import Input from './components/Input.vue'
import { Engine } from './engine/register'
// console.log('entry')
// export const register_test = {
//   alioth: 'setRegister',
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

export const view_x = {
  alioth: 'view',
  data: {
    key: 'input',
    value: Input,
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
