import { createProxyMiddleware } from 'http-proxy-middleware'
import { DbModule } from 'alioth-cloud-sdk'
import { BranchModel } from '../models/branch'
import { DeployModel } from '../models/deploy'

const RE = /\/(dev|prod)\/(\w+)\/(.*)/

export class ProxyPlugin extends PPlugin {
  constructor(protected db: DbModule) {
    super()
  }

  async use(req: Request, res: Response, next: () => void) {
    const { url } = req
    if (!RE.test(url))
      return next()

    const [mode, id, target] = url.match(RE)!

    const data = mode === 'dev' ? (await BranchModel.findById(id)) : (await DeployModel.findById(id))

    // @ts-expect-error miss upgrade
    const isWS = req.headers.upgrade.toLowerCase() === 'websocket'
    const proxy = createProxyMiddleware({
      target: `localhost:${data.port}/${target}`,
      ws: isWS, // 启用 WebSocket 代理
    })
    // @ts-expect-error express types
    proxy(req, res, next)
  }
}
