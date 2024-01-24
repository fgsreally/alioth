import { createServer } from 'http'
import { Factory, isPhecda } from 'phecda-server'
import { bindApp } from 'phecda-server/h3'
import { createApp, createRouter, toNodeListener } from 'h3'
import * as module1 from './src/a.ts'
const modules = [module1]

function parse(module: any) {
  return Object.values(module).filter(isPhecda)
}
const data = await Factory(modules)

const router = createRouter()

bindApp(router, data, {})

const app = createApp()

app.use(router)
createServer(toNodeListener(app)).listen(process.env.port)
