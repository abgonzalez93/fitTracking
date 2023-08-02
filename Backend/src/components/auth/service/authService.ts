// External Libraries
import jwt from 'jsonwebtoken'

// Constants
import httpStatus from '@constants/httpStatus'

// Utils
import HashService from '@utils/hashService'

// Middlewares
import { getJwtConfig } from '@middlewares/authentication/jwtConfig'
import { ErrorHandler } from '@middlewares/errorHandler'

// Components { Controllers, Models, Routes, Services, Validations }
import RefreshTokens from '@components/auth/model/refreshTokens'
import { type TokenPayloadInterface } from '@components/auth/model/tokenPayloadInterface'
import { type UserInterface } from '@components/user/model/userInterface'

// Configs and Messages
import { getAuthMessages, getUserMessages } from '@config/i18n/messages'

// Local files
import TokenType from '../model/enums/tokenType'

const authMsg = getAuthMessages.service
const userMsg = getUserMessages.service

const jwtConfig = getJwtConfig()

export default class AuthService {
    public static async authenticateUser (user: UserInterface, password: string): Promise<{ user: UserInterface, accessToken: string, refreshToken: string }> {
        if (!(await HashService.comparePassword(password, user.password))) {
            throw new ErrorHandler(httpStatus.UNAUTHORIZED, authMsg.wrongCredentials)
        }

        const { accessToken, refreshToken } = await this.generateAndStoreTokens(user._id)

        return { user, accessToken, refreshToken }
    }

    public static async refresh (refreshToken: string): Promise<{ accessToken: string, refreshToken: string }> {
        const oldPayload = await this.verifyToken(refreshToken, TokenType.REFRESH)

        const storedTokenDoc = await RefreshTokens.findOne({ userId: oldPayload.id, refreshToken })

        if (storedTokenDoc == null) {
            throw new ErrorHandler(httpStatus.BAD_REQUEST, authMsg.invalidToken)
        }

        await this.revokeToken(oldPayload.id, refreshToken)

        const newTokens = await this.generateAndStoreTokens(oldPayload.id)
        return newTokens
    }

    public static async generateAndStoreTokens (userId: string): Promise<{ accessToken: string, refreshToken: string }> {
        const accessToken = this.generateToken(userId, TokenType.ACCESS)
        const refreshToken = this.generateToken(userId, TokenType.REFRESH)

        await this.storeRefreshTokenForUser(userId, refreshToken)

        return { accessToken, refreshToken }
    }

    public static async revokeToken (userId: string, refreshToken: string): Promise<void> {
        await RefreshTokens.updateOne(
            { _id: userId },
            {
                $pull: {
                    tokens: {
                        refreshToken
                    }
                }
            }
        )
    }

    private static generateToken (id: string, type: TokenType): string {
        try {
            const payload = { id, type }
            const secret = this.getTokenConfig(type).secret
            const expiresIn = this.getTokenConfig(type).expiration

            const token = jwt.sign(payload, secret, { expiresIn })
            return token
        } catch (error) {
            throw new ErrorHandler(httpStatus.INTERNAL_SERVER_ERROR, authMsg.couldNotGenerateToken)
        }
    }

    private static async storeRefreshTokenForUser (userId: string, refreshToken: string): Promise<void> {
        const user = await RefreshTokens.findOne({ _id: userId })

        if (user === null) {
            throw new ErrorHandler(httpStatus.BAD_REQUEST, userMsg.userNotFound)
        } else {
            await RefreshTokens.updateOne(
                { _id: userId },
                {
                    $push: {
                        tokens: {
                            $each: [{ refreshToken }],
                            $slice: -5
                        }
                    }
                }
            )
        }
    }

    private static async verifyToken (token: string, type: TokenType): Promise<TokenPayloadInterface> {
        let payload

        const secret = this.getTokenConfig(type).secret

        try {
            payload = jwt.verify(token, secret)
        } catch (error) {
            throw new ErrorHandler(httpStatus.BAD_REQUEST, authMsg.couldNotVerifyToken)
        }

        if (payload === null) {
            throw new ErrorHandler(httpStatus.BAD_REQUEST, authMsg.invalidToken)
        }

        return payload as TokenPayloadInterface
    }

    private static getTokenConfig (type: TokenType): { secret: string, expiration: number } {
        switch (type) {
            case TokenType.ACCESS:
                return {
                    secret: jwtConfig.jwtSecretAccess,
                    expiration: jwtConfig.jwtExpiresAccess
                }
            case TokenType.REFRESH:
                return {
                    secret: jwtConfig.jwtSecretRefresh,
                    expiration: jwtConfig.jwtExpiresRefresh
                }
        }
    }
}
