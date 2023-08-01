// External Libraries
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt'

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

export default new JwtStrategy(jwtStrategyConfig, async (payload, done) => {
    try {
        if (payload.type !== TokenType.ACCESS) {
            return done(null, false)
        }

        const user = await UserService.getUser(payload.id)

        if (!user || typeof user !== 'object' || user.status != userStatus.Active) {
            return done(null, false)
        }

        return done(null, user)
    } catch (error) {
        return done(error, false)
    }
})
