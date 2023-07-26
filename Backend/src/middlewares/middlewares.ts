import express, { type Application } from 'express'
import helmet from 'helmet'
import cors from 'cors'
import morgan from 'morgan'
import rateLimit from 'express-rate-limit'
import i18n from '@config/i18n/i18n'
import compression from 'compression'
import { handleError, handle404Error } from '@middlewares/errorHandler'

export const applyMiddleware = (app: Application): void => {
    // Middleware to help protect your application from well-known vulnerabilities
    app.use(helmet())

    // Middleware to enable CORS (Cross-Origin Resource Sharing)
    app.use(cors())

    // Middleware to limit repetitive API requests to prevent brute force attacks
    app.use(rateLimit({
        windowMs: 15 * 60 * 1000, // 15 minutes
        max: 100 // Limit each IP to 100 requests per window
    }))

    // HTTP logging middleware
    app.use(morgan('dev'))

    // Middleware for centralized error handling
    app.use(handle404Error)
    app.use(handleError)

    // Middleware for parsing the body of incoming requests as JSON
    app.use(express.json())

    // Middleware for i18n
    app.use(i18n.init)

    // Middleware for gzip compression
    app.use(compression())
}
