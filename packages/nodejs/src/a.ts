import { Controller, Init } from 'phecda-server'
@Controller('/a')
export class ControllerA {
  @Init
  _init() {
    console.log('init')
  }
}
