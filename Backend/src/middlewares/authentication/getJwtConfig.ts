// External Libraries
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt'

// Constants
import httpStatus from '@constants/httpStatus'

// Middlewares
import { ErrorHandler } from '@middlewares/errorHandler'

// Components { Controllers, Models, Routes, Services, Validations }
import { userStatus } from '@components/user/model/enums'
import UserService from '@components/user/service/userService'

// Configs and Messages
import config from '@config/config'
import { getAuthenticationMessages } from '@config/i18n/messages'

const msg = getAuthenticationMessages.authentication

export const getJwtConfig = (): { jwtSecret: string, jwtExpires: number } => {
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

const jwtStrategyConfig = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: getJwtConfig().jwtSecret
}

export default new JwtStrategy(jwtStrategyConfig, (payload, done) => {
    UserService.getUser(payload.id).then(user => {
        if (user !== null && typeof user === 'object' && user.status === userStatus.Active) {
            done(null, user)
        } else {
            done(null, false)
        }
    }).catch(error => {
        done(error, false)
    })
})
