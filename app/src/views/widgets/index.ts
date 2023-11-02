import { useR } from 'phecda-vue'
import { ViewModel } from '@/models/view'
import EnvInput from '@/components/base/EnvInput.vue'
export function initWidget() {
  // registerWidget({
  //   category: '',
  //   key: 'root',
  //   component: Container,
  // })
  useR(ViewModel).componentMap.Input = EnvInput
}
