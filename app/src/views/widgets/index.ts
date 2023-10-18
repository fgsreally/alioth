import { useR } from 'phecda-vue'
import Container from './Container.vue'
import { ViewModel } from '@/models/view'
import EnvInput from '@/components/base/EnvInput.vue'
export function initWidget() {
  const registerWidget = window.$alioth_widget
  // registerWidget({
  //   category: '',
  //   key: 'root',
  //   component: Container,
  // })
  useR(ViewModel).componentMap.Input = EnvInput
}
