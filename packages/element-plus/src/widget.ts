import { $R, $RW } from 'alioth-dev/helper'
import Button from './widgets/Button.vue'
import Checkbox from './widgets/Checkbox.vue'

$RW('lib', 'Checkbox', Checkbox, {
  props: {
    options: {
      _component: 'List',
    },
  },
})

$RW('lib', 'Button', Button, {
  events: {
    onClick: {
      _component: 'Input',
      _formItem: { label: '点击' },

    },
  },
  props: {
    text: {
      _component: 'Input',
      _formItem: { label: '文本' },

    },
    type: {
      _component: 'Select',
      _formItem: { label: '类型' },
      placeholder: '类型',
      options: [
        {
          label: 'primary',
          value: 'primary',
        },
        {
          label: 'danger',
          value: 'danger',
        },
      ],
    },
  },
})

const a = ref(0)
$R('a', a, { description: 'hahah' })
$R('change', () => {
  a.value = 10
  console.log('change')
}, { description: 'hahah' })

$R('list', reactive([]), {})
