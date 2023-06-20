import { ImportState as State } from 'alioth-lib/model'
import { Init } from 'phecda-vue'

export class ImportState extends State {
  @Init
  init() {
    window.$alioth_register = this.register.bind(this)
  }
}
