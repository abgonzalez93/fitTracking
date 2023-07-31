// External Libraries
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt'

// Constants
import httpStatus from '@constants/httpStatus'

// Middlewares
import { ErrorHandler } from '@middlewares/errorHandler'

// Components { Controllers, Models, Routes, Services, Validations }
import AuthService from '@components/auth/service/authService'
import { userStatus } from '@components/user/model/enums'
import UserService from '@components/user/service/userService'

// Configs and Messages
import config from '@config/config'
import { getAuthenticationMessages } from '@config/i18n/messages'

const msg = getAuthenticationMessages.authentication

export const getJwtConfig = (): { jwtSecretAccess: string, jwtSecretRefresh: string, jwtExpiresAccess: number, jwtExpiresRefresh: number } => {
    const jwtSecretAccess = config.JWT_SECRET_ACCESS
    const jwtSecretRefresh = config.JWT_SECRET_REFRESH
    const jwtExpiresAccess = config.JWT_EXPIRES_ACCESS
    const jwtExpiresRefresh = config.JWT_EXPIRES_REFRESH

    if (jwtSecretAccess === null || jwtSecretRefresh === null) {
        throw new ErrorHandler(httpStatus.INTERNAL_SERVER_ERROR, msg.invalidToken)
    }

    if (jwtExpiresAccess === null || jwtExpiresRefresh === null) {
        throw new ErrorHandler(httpStatus.INTERNAL_SERVER_ERROR, msg.expiredToken)
    }

    return { jwtSecretAccess, jwtSecretRefresh, jwtExpiresAccess, jwtExpiresRefresh }
}

const jwtStrategyConfig = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: getJwtConfig().jwtSecretAccess
}

export default new JwtStrategy(jwtStrategyConfig, async (payload, done) => {
    try {
        if (payload.type !== 'access') {
            return done(null, false)
        }

        const user = await UserService.getUser(payload.id)

        if (!user || typeof user !== 'object' || user.status != userStatus.Active) {
            return done(null, false)
        }

        const providedRefreshToken = await AuthService.getRefreshTokenForUser(user.id, payload.refreshToken)

        if (providedRefreshToken === null) {
            return done(null, false)
        }

        return done(null, user)
    } catch (error) {
        return done(error, false)
    }
})
