import { $R, $RE, $RW } from 'alioth-dev/helper'
import { ref } from 'vue'
import { useR } from 'phecda-vue'
import HW from './components/HelloWorld.vue'

const c = ref(1)
export function changeC() {
  console.log('xx')
  c.value++
}

$R('c', c, {})
$R('changeC', changeC, {})
$RW('lib', 'a', HW, {
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
})
