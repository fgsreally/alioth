import { ref } from 'vue'
import type { AliothWidget } from 'alioth-vue'
import TestVue from './components/Test.vue'
import HW from './components/HelloWorld.vue'

const c = ref(1)
export const state_c = {
  alioth: 'state',
  data: {
    key: 'c',
    value: c,
  },
}

const arr = ref(['a', 'b'])

export const state_arr = {
  alioth: 'state',
  data: {
    key: 'arr',
    value: arr,
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
    mode: 'lib',
    key: 'a',
    component: HW,
    // meta: {
    //   props: {
    //     text: {
    //       _component: 'Input',
    //       _formItem: { label: '绑定数据' },
    //     },
    //   },
    //   events: {
    //     onClick: {
    //       _component: 'Input',
    //       _formItem: { label: '绑定事件' },
    //     },
    //   },
    // },
  },
}
export const widget_test: AliothWidget = {
  alioth: 'widget',
  data: {
    mode: 'lib',
    key: 'test',
    component: TestVue,
    // meta: {
    //   props: {
    //     msg: {
    //       _component: 'Input',
    //       _formItem: { label: '绑定数据' },
    //     },
    //     vfor: {
    //       _component: 'Input',
    //       _formItem: { label: '循环' },
    //     },
    //   },
    //   events: {
    //     onClick: {
    //       _component: 'Input',
    //       _formItem: { label: '绑定事件' },
    //     },
    //   },
    // },
  },
}
