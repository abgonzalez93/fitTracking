// External Libraries
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt'

// Utils
import logger from '@utils/logger'

// Components { Controllers, Models, Routes, Services, Validations }
import TokenType from '@components/auth/model/enums/tokenType'
import { userStatus } from '@components/user/model/enums'
import UserService from '@components/user/service/userService'

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
