import { Server } from 'ws'
import type { NodeEvent } from 'alioth-lib'
export class WsEdge extends Server {
  constructor() {
    super({ port: 4000 })
  }

  map = {} as Record<string, any>
  @Init
  async init() {
    this.on('connection', (ws, req) => {
      const uuid = new URL(req.url).searchParams.get('id')
      if (this.map[uuid])
        ws.send(JSON.stringify(this.map[uuid]))

      else
        this.map[uuid] = {}

      ws.on('message', (e) => {
        const { data, type } = JSON.parse(e.toString()) as { type: string; data: NodeEvent }
        switch (type) {
          case 'init':
            this.map[uuid] = data
            break
        }
      })
    })
  }
}
