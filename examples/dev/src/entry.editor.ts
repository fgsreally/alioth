import { ref } from 'vue'
import Input from './components/Input.vue'
export { container, engine, engine_prod } from './engine'

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
