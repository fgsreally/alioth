import { BaseEngine } from 'alioth-vue'
import { h } from 'vue'
export class Engine extends BaseEngine<any, any> {
  text() {
    return h('p', {
      class: 'preview-text',
    }, '1')
  }
}
