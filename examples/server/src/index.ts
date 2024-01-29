import { bindApp } from 'phecda-server/express'
import { Factory } from 'phecda-server'
import express from 'express'
import { ProjectController } from './modules/project.controller'
const router = express.Router()

const data = await Factory([ProjectController])

bindApp(router, data)

const app = express()
app.use(express.json())

app.use(router)
app.listen(8080)
