// External Libraries
import passport from 'passport'

// Middlewares
import jwtStrategy from '@middlewares/authentication/getJwtConfig'

passport.use(jwtStrategy)

export const authentication = passport.authenticate('jwt', { session: false })
