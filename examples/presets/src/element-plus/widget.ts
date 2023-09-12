import { createLayer } from 'phecda-vue'
import { ElDialog } from 'element-plus'
import 'element-plus/es/components/dialog/style/index'
import { toRaw } from 'vue'
import Btn, { addon } from './widgets/Button.vue'
// const modules = import.meta.glob('./widgets/*.vue', {
//   eager: true,
// })

// Object.entries(modules).forEach(([key, module]) => {
//   if (!(module as any).addon)
//     return
//   const { info, props } = (module as any).addon()
//   const ret = /\/([^/]+)\.vue$/.exec(key)!
//   $RW('element-plus', ret[1], (module as any).default, props || info)
// })

export const widget_button = {
  alioth: 'widget',
  data: {
    category: 'element-plus',
    key: 'el-button',
    component: Btn,
    meta: addon().props,
  },
}
export const state_useModal = {
  alioth: 'state',
  data: {
    key: 'useModal',
    value: createLayer(ElDialog, { center: true }),
  },
}
// const a = ref(0)
// $R('a', a, { description: 'hahah' })
// $R('change', () => {
//   a.value = 10
//   console.log('change')
// }, { description: 'hahah' })

// $R('list', reactive([]), {})
export const state_c = {
  alioth: 'state',
  data: {
    key: 'x',
    value: 11,
  },
}
