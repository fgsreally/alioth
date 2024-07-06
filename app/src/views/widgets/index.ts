import { useR } from 'phecda-vue'
import { internal } from 'alioth-vue'
import Container from './Container.vue'
import { ViewModel } from '@/models/view'
import EnvInput from '@/components/base/EnvInput.vue'
export function initWidget() {
  (internal as any).widgetStore.set('editor', 'page', Container);
  (internal as any).widgetStore.set('editor', undefined, Container);

  (internal as any).stateStore.set('editor', undefined, {})
  // (internal as any).renderFnStore.set('editor', 'page', (arg) => {
  //   console.log('arg', arg)
  //   return h('div', {}, '111')
  // })

  useR(ViewModel).componentMap.Input = EnvInput
}
