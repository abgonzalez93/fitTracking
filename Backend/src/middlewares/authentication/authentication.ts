// External Libraries
import passport from 'passport'

// Middlewares
import jwtStrategy from '@middlewares/authentication/jwtStrategy'

passport.use(jwtStrategy)

export const authentication = passport.authenticate('jwt', { session: false })
