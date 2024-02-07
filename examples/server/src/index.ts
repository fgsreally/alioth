import { bindApp } from 'phecda-server/express'
import { Factory } from 'phecda-server'
import express from 'express'
import dotenv from 'dotenv'
import { ProjectController } from './modules/project.controller'
import { WsEdge } from './modules/ws.edge'
dotenv.config()
const router = express.Router()
const data = await Factory([ProjectController, WsEdge])

bindApp(router, data)

const app = express()
app.use(express.json())

app.use(router)
app.listen(8080, () => {
  console.log('start server')
})
