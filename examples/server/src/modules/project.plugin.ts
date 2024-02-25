import { createProxyMiddleware } from 'http-proxy-middleware'
import { DbModule } from 'alioth-cloud-sdk'

const projectRE = /\/(\w+)\/(\w+)\/(.*)/

export class ProjectPlugin extends PPlugin {
  constructor(protected db: DbModule) {
    super()
  }

  async use(req: Request, res: Response, next: () => void) {
    const { url } = req
    if (!projectRE.test(url))
      return next()

    const [user, project, target] = url.match(projectRE)!

    const data = await this.db.collection('projects').findOne({ namespace: user, project })

    const isWS = req.headers.upgrade.toLowerCase() === 'websocket'
    const proxy = createProxyMiddleware({
      target: `localhost:${isWS ? data.port.ws : data.port.http}/${target}`,
      ws: isWS, // 启用 WebSocket 代理
    })
    // @ts-expect-error express types
    proxy(req, res, next)
  }
}
