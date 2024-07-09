// import { useR } from 'phecda-vue'
import { internal } from 'alioth-vue'
import Container from './Container.vue'
// import { ZoneModel } from '@/models/view'
// import EnvInput from '@/components/base/EnvInput.vue'
export function initWidget() {
  internal.getStore('widget').set('page', Container)

  // internal.getStore('state').set('editor', undefined, {})
  // (internal as any).renderFnStore.set('editor', 'page', (arg) => {
  //   console.log('arg', arg)
  //   return h('div', {}, '111')
  // })

  // useR(ZoneModel).componentMap.Input = EnvInput
}
