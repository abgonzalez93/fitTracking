// External Libraries
import express, { type Express } from 'express'

// Middlewares
import { applyMiddleware } from '@middlewares/middlewares'

// Router
import router from '@router/router'

const app: Express = express()

applyMiddleware(app)
app.use(express.static('public'))
app.use(router)

export default app
