import { ref } from 'vue'
import Input from './components/Input.vue'
import Test from './components/Test.vue'
import Button from './components/Button.vue'
export { container, engine } from './engine'

export const InputZone = {
  alioth: 'zone',
  key: 'input',
  data: Input,
  meta: {
    zone: 'float',
    props: {
      label: 'Input',
      isActive: true,
      hidden: false,
      x: 500,
      y: 300,
    },
  },
}

export const TestState = {
  alioth: 'state',
  key: 'label',
  data: ref('fgs'),

}

export const t2State = {
  alioth: 'state',
  key: 'changeLabel',
  data: () => TestState.data.value = 'mu',

}

export const TestWidget = {
  alioth: 'widget',
  key: 'test',
  data: Test,

}

export const BtnWidget = {
  alioth: 'widget',
  key: 'btn',
  data: Button,

}
