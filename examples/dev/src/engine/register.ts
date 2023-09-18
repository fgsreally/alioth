import { BaseRegister } from 'alioth-vue'
import { h } from 'vue'
export class Engine extends BaseRegister<any, any> {
  text() {
    return h('p', {
      class: 'preview-text',
    }, '1')
  }
}
