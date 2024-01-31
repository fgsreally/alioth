import type { NodeAttrs } from 'alioth-vue'
import { Init, emitter } from 'phecda-vue'
import { BaseDocModel, WsClientBridge } from 'alioth-vue'
export class DocModel<T extends NodeAttrs> extends BaseDocModel<T> {
  containerAttrs = markRaw(
    {
      title: '11',
      key: 'root',
      page: true,
      width: 480,
      height: 400,
      fontSize: 16,
      backgroundColor: 'rgb(102, 107, 226)',
      gridColor: '#ff00006b',
      gridNum: 10,
      gridGap: 20,
      margin: 0,
      radius: 0,
      isContainer: true,
      isFull: false,
      isGrid: true,
      mode: 'normal',
      wLimit: [375, 2000],
      hLimit: [600, 4000],
    },
  )

  @Init
  init() {
    const ws = new WsClientBridge(this.controller
      , 'ws://localhost:4000?id=1')

    const rawEmit = this.emit.bind(this)
    this.emit = (...args) => {
      emitter.emit('alioth:node-action', null)
      return rawEmit(...args)
    }
  }
}
