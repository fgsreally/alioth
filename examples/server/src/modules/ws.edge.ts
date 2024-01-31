import { WebSocketServer } from 'ws'
import type { CommitEvent } from 'alioth-lib'
import { ServerBridge } from 'alioth-lib/server'

export class WsEdge extends WebSocketServer {
  constructor() {
    super({ port: 4000 })
  }

  clientSet = new Set<WebSocket>()
  map = {} as Record<string, ServerBridge>
  @Init
  async init() {
    this.on('connection', (ws, req) => {
      this.clientSet.add(ws)

      const uuid = new URL(req.url, 'http://localhost:4000').searchParams.get('id')
      if (this.map[uuid]) {
        ws.send(JSON.stringify({ type: 'init', data: this.map[uuid].store() }))
      }

      else {
        this.map[uuid] = new ServerBridge()

        ws.send('true')
      }

      ws.on('message', (e) => {
        const data = JSON.parse(e.toString()) as CommitEvent

        if (this.map[uuid].handle(data)) {
          this.clientSet.forEach((client, i) => {
            // 检查连接是否还打开
            if (client !== ws) {
              // 发送消息
              client.send(JSON.stringify(data))
            }
          })
        }
      })
    })
  }
}
