import passport from 'passport'
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt'
import { ErrorHandler } from '@middlewares/errorHandler'
import UserService from '@components/user/service/userService'
import httpStatus from '@constants/httpStatus'
import config from '@config/config'
import { getAuthenticationMessages } from '@config/i18n/messages/middlewares/authenticationMessages'
import { userStatus } from '@components/user/model/enums'

const msg = getAuthenticationMessages.authentication

export const getJwtConfig = () => {
    const jwtSecret = config.JWT_SECRET
    const jwtExpires = config.JWT_EXPIRES_IN

    if (jwtSecret === null) {
        throw new ErrorHandler(httpStatus.INTERNAL_SERVER_ERROR, msg.invalidToken)
    }

    if (jwtExpires === null) {
        throw new ErrorHandler(httpStatus.INTERNAL_SERVER_ERROR, msg.expiredToken)
    }

    return { jwtSecret, jwtExpires }
}

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: getJwtConfig().jwtSecret,
}

passport.use(new JwtStrategy(options, async (payload, done) => {
    try {
        const user = await UserService.getUser(payload.id)

        if (user && user.status === userStatus.Active) {
            return done(null, user)
        }

        return done(null, false)
    } catch (error) {
        return done(error, false)
    }
}))

export const authentication = passport.authenticate('jwt', { session: false })
