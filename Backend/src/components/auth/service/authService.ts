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
import { getAuthMessages, getAuthenticationMessages } from '@config/i18n/messages'

// Local files
import TokenType from '../model/enums/tokenType'

const authMsg = getAuthMessages.service
const authTokenMsg = getAuthenticationMessages.authentication

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

        if (!(typeof oldPayload === 'object' && oldPayload !== null)) {
            throw new ErrorHandler(httpStatus.BAD_REQUEST, authTokenMsg.invalidToken)
        }

        const storedTokenDoc = await RefreshTokens.findOne({ userId: oldPayload.id, refreshToken })

        if (!storedTokenDoc) {
            throw new ErrorHandler(httpStatus.UNAUTHORIZED, authTokenMsg.invalidToken)
        }

        await this.revokeToken(oldPayload.id, refreshToken)

        return await this.generateAndStoreTokens(oldPayload.id)
    }

    public static async generateAndStoreTokens(userId: string): Promise<{ accessToken: string, refreshToken: string }> {
        const accessToken = this.generateToken(userId, TokenType.ACCESS)
        const refreshToken = this.generateToken(userId, TokenType.REFRESH)

        await this.storeRefreshTokenForUser(userId, refreshToken)

        return { accessToken, refreshToken }
    }

    private static generateToken (id: string, type: TokenType): string {
        try {
            const payload = { id, type }
            const expiresIn = type === TokenType.ACCESS ? jwtConfig.jwtExpiresAccess : jwtConfig.jwtExpiresRefresh
            const secret = this.getTokenSecret(type)

            const token = jwt.sign(payload, secret, { expiresIn: expiresIn })
            return token
        } catch (error) {
            throw new ErrorHandler(httpStatus.INTERNAL_SERVER_ERROR, 'Could not generate token');
        }
    }

    private static async storeRefreshTokenForUser(userId: string, refreshToken: string): Promise<void> {
        await RefreshTokens.updateOne(
            { userId: userId },
            {
                $push: {
                    tokens: {
                        $each: [{ refreshToken }],
                        $slice: -5,
                    }
                }
            },
            { upsert: true }
        )
    }

    private static async revokeToken(userId: string, refreshToken: string): Promise<void> {
        await RefreshTokens.updateOne(
            { userId: userId },
            {
                $pull: {
                    tokens: {
                        refreshToken: refreshToken
                    }
                }
            }
        )
    }

    private static async verifyToken(token: string, type: TokenType): Promise<TokenPayloadInterface> {
        let payload

        const secret = this.getTokenSecret(type)

        try {
            payload = jwt.verify(token, secret)
        } catch (error) {
            throw new ErrorHandler(httpStatus.BAD_REQUEST, authTokenMsg.couldNotVerifyToken)
        }

        if (typeof payload === 'string' || payload === null) {
            throw new ErrorHandler(httpStatus.BAD_REQUEST, authTokenMsg.invalidToken)
        }

        return payload as TokenPayloadInterface
    }

    private static getTokenSecret(type: TokenType): string {
        return type === TokenType.ACCESS ? jwtConfig.jwtSecretAccess : jwtConfig.jwtSecretRefresh
    }
}
