import { Init } from 'phecda-vue'

export class ChannelModel {
  @Init
  init() {
    window.addEventListener('message', (e) => {
      const { data, type } = e.data
      console.log(type, this.task)
      this.task[type]?.(data)
    }, false)
  }

  task = {} as Record<string, (arg: any) => void>

  add(type: string, cb: (arg: any) => void) {
    this.task[type] = cb
  }

  send(type: string, data: any) {
    window.parent.postMessage({
      type, data,
    }, '*')
  }
}
