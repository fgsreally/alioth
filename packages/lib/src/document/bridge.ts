import type { DocData } from './document'
import { VirtualDocument } from './document'
import { type Controller, type NodeEvent, applyEventToNode } from './controller'

export interface InitEvent { type: 'init';data: DocData }

export type CommitEvent = (NodeEvent & { time: number }) | InitEvent
export abstract class ClientBridge {
  protected readonly _memory = new Map<string, number>()// store event timestamp
  constructor(protected controller: Controller) {
    controller.invokeBridge = (event) => {
      const time = process.env.TEST ? performance.now() : Date.now()
      if (event.type === 'set')

        this._memory.set(`set-${event.nodeId}-${event.key}`, time)

      if (event.type === 'swap')
        this._memory.set(`swap-${event.nodeId}`, time)
      this.send({ ...event, time })
    }
  }

  abstract send(event: CommitEvent): void

  handle(event: CommitEvent) {
    if (event.type === 'init') {
      this.controller.refresh()
      this.controller.doc.load(event.data)
      return
    }

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

export class ServerBridge extends VirtualDocument {
  protected readonly _memory = new Map<string, number>()// store event timestamp
  constructor() {
    super()
  }

  handle(event: CommitEvent) {
    if (event.type === 'init') {
      this.load(event.data)
      return
    }

    if (event.type === 'set') {
      const localUpdateTime = this._memory.get(`set-${event.nodeId}-${event.key}`)
      if (localUpdateTime && localUpdateTime > event.time)
        return false

      this._memory.set(`set-${event.nodeId}-${event.key}`, event.time)
    }
    if (event.type === 'swap') {
      const localUpdateTime = this._memory.get(`swap-${event.nodeId}`)

      if (localUpdateTime && localUpdateTime > event.time)
        return false

      this._memory.set(`swap-${event.nodeId}`, event.time)
    }

    return applyEventToNode(this, event)
  }
}

export class WsClientBridge extends ClientBridge {
  socket: WebSocket
  constructor(controller: Controller, protected url: string) {
    super(controller)
    this.socket = new WebSocket(url)
    this.socket.addEventListener('message', (e: any) => {
      const { data } = e

      if (data === 'true')
        this.send({ type: 'init', data: this.controller.doc.store() })

      else
        this.handle(JSON.parse(data))
    })
  }

  send(e: CommitEvent) {
    this.socket.send(JSON.stringify(e))
  }
}
