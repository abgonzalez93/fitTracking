// External Libraries
import passport from 'passport'
import { type Request, type Response, type NextFunction } from 'express'

// Constants
import httpStatus from '@constants/httpStatus'

// Middlewares
import jwtStrategy from '@middlewares/authentication/jwtStrategy'
import { ErrorHandler } from '@middlewares/errorHandler'
import { type UserInterface } from '@api/models/user/userInterface'

// Messages
import { getAuthenticationMessages } from '@i18n/messages'

const msg = getAuthenticationMessages.authentication

passport.use(jwtStrategy)

export const authentication = (req: Request, res: Response, next: NextFunction): void => {
    passport.authenticate('jwt', { session: false }, (error: ErrorHandler, user: UserInterface) => {
        if (error !== null) {
            next(error)
            return
        }

        if (user === null) {
            next(new ErrorHandler(httpStatus.UNAUTHORIZED, msg.unauthorized))
            return
        }

        req.user = user
        next()
    })(req, res, next)
}
