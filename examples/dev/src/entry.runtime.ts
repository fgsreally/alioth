import { ref } from 'vue'
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
    mode: 'editor',
    key: 'a',
    component: HW,

  },
}
export const widget_test = {
  alioth: 'widget',
  data: {
    mode: 'editor',
    key: 'test',
    component: TestVue,

  },
}
