import type { Controller, NodeEvent } from './controller'

interface CommitEvent {
  type: 'commit'
  eventId: string
}

export abstract class Bridge {
  protected _cache = [] as NodeEvent[]
  constructor(protected controller: Controller) {
    controller.bridge = (event) => {
      this._cache.push(event)
      this.send(event)
    }
  }

  abstract send(event: NodeEvent): void

  handle(event: NodeEvent | CommitEvent) {
    if (event.type === 'commit') {
      this._cache.splice(this._cache.findIndex(item => item.eventId === event.eventId), 1)
    }

    else {
      if (this._cache.find(item => item.type === 'set' && item.key))
        return
      this.controller.applyEvent(event)
    }
  }
}

export class WsBridge extends Bridge {
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
