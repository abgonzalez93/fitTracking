// External Libraries
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt'

// Constants
import httpStatus from '@constants/httpStatus'

// Utils
import logger from '@utils/logger'

// Middlewares
import { ErrorHandler } from '@middlewares/errorHandler'

// Components { Controllers, Models, Routes, Services, Validations }
import TokenType from '@auth/models/enums/tokenType'
import { userStatus } from '@api/models/user/enums'
import UserService from '@api/services/userService'

// Local files
import { getJwtConfig } from './jwtConfig'

const jwtStrategyConfig = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: getJwtConfig().jwtSecretAccess
}

export default new JwtStrategy(jwtStrategyConfig, (payload, done) => {
    (async () => {
        try {
            if (payload.type !== TokenType.ACCESS) {
                throw new ErrorHandler(httpStatus.UNAUTHORIZED, 'Invalid token type.')
            }

            const user = await UserService.getUser(payload.id)

            if (user === null || typeof user !== 'object' || user.status !== userStatus.Active) {
                throw new ErrorHandler(httpStatus.UNAUTHORIZED, 'User not found or not active.')
            }

            done(null, user)
        } catch (error) {
            done(error, false)
        }
    })().catch((error) => {
        logger.error(error)
        done(error, false)
    })
})
