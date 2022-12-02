import A from './A.vue'
import B from './B.vue'
import C from './C.vue'
import { delComponent, registerComponent } from '@/engine/register'
export function init() {
  registerComponent('lib', 'test1', A)
  registerComponent('lib', 'test2', B)
  registerComponent('local', 'dialog', [ElDialog, C])
  setTimeout(() => delComponent('test1'), 3000)
}
