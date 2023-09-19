import { Init } from 'phecda-vue'

export class ChannelModel {
  sandbox: Window
  task = {} as Record<string, (arg: any) => void>

  add(type: string, cb: (arg: any) => void) {
    this.task[type] = cb
  }

  @Init
  init() {
    window.addEventListener('message', (e) => {
      if (e.origin === 'alioth-sandbox') {
        const { data, type } = e.data
        this.task[type]?.(data)
      }
    }, false)
  }

  bindSandbox(window: Window) {
    this.sandbox = markRaw(window)
  }

  send(type: string, data: any) {
    if (this.sandbox) {
      this.sandbox.postMessage({
        type, data,
      }, '*')
    }
  }
}
