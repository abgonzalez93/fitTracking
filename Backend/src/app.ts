// External Libraries
import express, { type Express } from 'express'

// Middlewares
import { applyMiddlewares } from '@middlewares/middlewares'
import { handleError, handle404Error } from '@middlewares/errorHandler'

// Router
import router from '@router/router'

const app: Express = express()

applyMiddlewares(app)

app.use(router)

app.use(handle404Error)
app.use(handleError)

export default app
