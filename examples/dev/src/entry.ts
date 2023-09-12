import { ref } from 'vue'
import HW from './components/HelloWorld.vue'

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
      console.log('xx')
      c.value++
    },
  },
}

export const widget_a = {
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
