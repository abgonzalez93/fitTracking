// External Libraries
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt'

// Utils
import logger from '@utils/logger'

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
                done(null, false)
                return
            }

            const user = await UserService.getUser(payload.id)

            if (user === null || typeof user !== 'object' || user.status !== userStatus.Active) {
                done(null, false)
                return
            }

            done(null, user)
        } catch (error) {
            done(error, false)
        }
    })().catch((error) => {
        logger.error(error)
    })
})
