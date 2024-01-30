import type { Controller, NodeEvent } from './controller'

export abstract class ClientBridge {
  protected readonly _memory = new Map<string, number>()// store event timestamp
  constructor(protected controller: Controller) {
    controller.invokeBridge = (event) => {
      const time = performance.now()
      if (event.type === 'set')

        this._memory.set(`set-${event.nodeId}-${event.key}`, time)

      if (event.type === 'swap')
        this._memory.set(`swap-${event.nodeId}`, time)
      this.send({ ...event, time })
    }
  }

  abstract send(event: NodeEvent & { time: number }): void

  handle(event: NodeEvent & { time: number }) {
    if (event.type === 'set') {
      const localUpdateTime = this._memory.get(`set-${event.nodeId}-${event.key}`)
      if (localUpdateTime && localUpdateTime > event.time)
        return
    }
    if (event.type === 'swap') {
      const localUpdateTime = this._memory.get(`swap-${event.nodeId}`)

      if (localUpdateTime && localUpdateTime > event.time)
        return
    }

    this.controller.applyEvent(event)
  }
}

export class WsinvokeBridge extends ClientBridge {
  socket: WebSocket
  constructor(controller: Controller, protected url: string) {
    super(controller)
    this.socket = new WebSocket(url)
    this.socket.onmessage = (e) => {
      this.handle(e.data as any)
    }
  }

  send(e: NodeEvent) {
    this.socket.send(JSON.stringify(e))
  }
}
