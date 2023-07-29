// External Libraries
import express, { type Application } from 'express'
import rateLimit from 'express-rate-limit'
import compression from 'compression'
import passport from 'passport'
import morgan from 'morgan'
import helmet from 'helmet'
import cors from 'cors'

// Middlewares
import { handleError } from '@middlewares/errorHandler'

// Configs and Messages
import i18n from '@config/i18n/i18n'

export const applyMiddleware = (app: Application): void => {
    // Middleware to help protect your application from well-known vulnerabilities
    app.use(helmet())

    // Middleware for gzip compression
    app.use(compression())

    // Middleware to enable CORS (Cross-Origin Resource Sharing)
    app.use(cors())

    // Middleware for parsing the body of incoming requests as JSON
    app.use(express.json())

    // HTTP logging middleware
    app.use(morgan('dev'))

    // Middleware to limit repetitive API requests to prevent brute force attacks
    app.use(rateLimit({
        windowMs: 15 * 60 * 1000, // 15 minutes
        max: 100 // Limit each IP to 100 requests per window
    }))

    // Middleware for i18n
    app.use(i18n.init)

    // Middleware for Passport
    app.use(passport.initialize())

    /*
        No debes usar el middleware authentication de Passport para todas las rutas de tu aplicación,
        ya que esto requeriría que todas las solicitudes estén autenticadas. En su lugar,
        debes usar el middleware en las rutas individuales que quieres proteger.

        app.use(authentication)
    */

    // Middleware for centralized error handling
    app.use(handleError)
}
