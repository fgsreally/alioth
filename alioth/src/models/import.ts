import { ImportState as State } from 'alioth-lib/model'
import { Init } from 'phecda-vue'

export class ImportState extends State {
  @Init
  init() {
      const query = location.href.split('?')[1]
  if (query) {
    const module
this.register()
  }
    window.$alioth_register = this.register.bind(this)
  }
}
