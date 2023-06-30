import { $R, $RW } from 'alioth-dev/helper'
import Button from './widgets/Button.vue'
$RW('lib', 'Button', Button, {
  props: {
    text: {
      _component: 'Input',
      _formItem: { label: '文本' },

    },
  },
})
$R('a', ref('这是a'), { description: 'hahah' })
