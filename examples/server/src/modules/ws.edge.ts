import { Server } from 'ws'
import type { CommitEvent } from 'alioth-lib'
import { VirtualDocument, applyEventToNode } from 'alioth-lib'
export class WsEdge extends Server {
  constructor() {
    super({ port: 4000 })
  }

  map = {} as Record<string, VirtualDocument>
  @Init
  async init() {
    this.on('connection', (ws, req) => {
      const uuid = new URL(req.url).searchParams.get('id')
      if (this.map[uuid]) {
        ws.send(JSON.stringify({ type: 'init', data: this.map[uuid].store() }))
      }

      else {
        this.map[uuid] = new VirtualDocument()

        ws.send('true')
      }

      ws.on('message', (e) => {
        const data = JSON.parse(e.toString()) as CommitEvent | { type: 'init';data: any }
        switch (data.type) {
          case 'init':
            this.map[uuid].load(data.data)
            break
          case 'update':
            applyEventToNode(this.map[uuid], data)
            break
        }
      })
    })
  }
}
