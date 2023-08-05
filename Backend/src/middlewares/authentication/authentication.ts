// External Libraries
import passport from 'passport'
import { type Request, type Response, type NextFunction } from 'express'

// Constants
import httpStatus from '@constants/httpStatus'

// Middlewares
import jwtStrategy from '@middlewares/authentication/jwtStrategy'
import { ErrorHandler } from '@middlewares/errorHandler'
import { UserInterface } from '@api/models/user/userInterface'

passport.use(jwtStrategy)

export const authentication = (req: Request, res: Response, next: NextFunction) => {
    passport.authenticate('jwt', { session: false }, (error: ErrorHandler, user: UserInterface) => {
        if (error) {
            return next(error)
        }

        if (!user) {
            return next(new ErrorHandler(httpStatus.UNAUTHORIZED, 'Unauthorized'))
        }

        req.user = user
        next()
    })(req, res, next)
}
