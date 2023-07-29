// External Libraries
import express, { type Express } from 'express'

// Middlewares
import { applyMiddleware } from '@middlewares/middlewares'
import { handle404Error } from '@middlewares/errorHandler'

// Router
import router from '@router/router'

const app: Express = express()

applyMiddleware(app)
app.use(express.static('public'))
app.use(router)

app.use(handle404Error)

export default app
