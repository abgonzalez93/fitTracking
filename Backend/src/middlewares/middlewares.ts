// External Libraries
import express, { type Application } from 'express'
import rateLimit from 'express-rate-limit'
import compression from 'compression'
import passport from 'passport'
import morgan from 'morgan'
import helmet from 'helmet'
import cors from 'cors'

// Messages
import i18n from '@i18n/i18n'

export const applyMiddlewares = (app: Application): void => {
    // Middleware to help protect your application from well-known vulnerabilities
    app.use(helmet())

    // Middleware for gzip compression
    app.use(compression())

    // Middleware to enable CORS (Cross-Origin Resource Sharing)
    app.use(cors())

    // Middleware to limit repetitive API requests to prevent brute force attacks
    app.use(rateLimit({
        windowMs: 15 * 60 * 1000, // 15 minutes
        max: 100 // Limit each IP to 100 requests per window
    }))

    // HTTP logging middleware
    app.use(morgan('dev'))

    // Middleware for parsing the body of incoming requests as JSON - Request body limit set to 100mb
    app.use(express.json({ limit: '100mb' }))
    app.use(express.urlencoded({ limit: '100mb', extended: true }))

    // Middleware to serve static files from 'public' directory
    app.use(express.static('public'))

    // Middleware for i18n
    app.use(i18n.init)

    // Middleware for Passport
    app.use(passport.initialize())
}
