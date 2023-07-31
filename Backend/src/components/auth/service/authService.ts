// External Libraries
import jwt from 'jsonwebtoken'

// Constants
import httpStatus from '@constants/httpStatus'

// Utils
import HashService from '@utils/hashService'

// Middlewares
import { ErrorHandler } from '@middlewares/errorHandler'
import { getJwtConfig } from '@middlewares/authentication/getJwtConfig'

// Components { Controllers, Models, Routes, Services, Validations }
import RefreshTokens from '@components/auth/model/refreshTokens'
import { type RefreshTokensInterface } from '@components/auth/model/refreshTokensInterface'
import { type UserInterface } from '@components/user/model/userInterface'
import UserService from '@components/user/service/userService'

// Configs and Messages
import { getAuthMessages, getAuthenticationMessages } from '@config/i18n/messages'

const authMsg = getAuthMessages.service
const authTokenMsg = getAuthenticationMessages.authentication

export default class AuthService {
    public static async authenticateUser (email: string, username: string, password: string): Promise<UserInterface> {
        const user = await UserService.getUserByEmailOrUsername(email, username, true)

        if (user === null || user === undefined || !(await HashService.comparePassword(password, user.password))) {
            throw new ErrorHandler(httpStatus.UNAUTHORIZED, authMsg.wrongCredentials)
        }

        await this.generateAndStoreTokens(user._id)

        return user
    }

    public static generateToken (id: string, type: 'access' | 'refresh'): string {
        const { jwtSecretAccess, jwtSecretRefresh, jwtExpiresAccess, jwtExpiresRefresh } = getJwtConfig()

        const payload = { id, type }
        const expiresIn = type === 'access' ? jwtExpiresAccess : jwtExpiresRefresh
        const secret = type === 'access' ? jwtSecretAccess : jwtSecretRefresh

        const token = jwt.sign(payload, secret, { expiresIn: expiresIn })
        return token
    }

    public static async storeRefreshTokenForUser(userId: string, refreshToken: string): Promise<void> {
        const existingTokens = await RefreshTokens.find({ userId }).sort({ createdAt: 1 })

        if (existingTokens.length >= 5) {
            const oldestToken = existingTokens[0]
            await RefreshTokens.deleteOne({ _id: oldestToken._id })
        }

        const refreshTokenDoc = new RefreshTokens({ userId, refreshToken })
        await refreshTokenDoc.save()
    }

    public static async getRefreshTokenForUser(userId: string, token: string): Promise<RefreshTokensInterface | null> {
        return await RefreshTokens.findOne({ userId, token })
    }

    public static async generateAndStoreTokens(userId: string): Promise<{ accessToken: string, refreshToken: string }> {
        const accessToken = this.generateToken(userId, 'access')
        const refreshToken = this.generateToken(userId, 'refresh')

        await this.storeRefreshTokenForUser(userId, refreshToken)

        return { accessToken, refreshToken }
    }

    public static async refreshToken (refreshToken: string): Promise<void> {
        const oldPayload = await this.verifyToken(refreshToken, 'refresh')

        if (typeof oldPayload !== 'object' || oldPayload === null) {
            throw new ErrorHandler(httpStatus.BAD_REQUEST, authTokenMsg.invalidToken)
        }

        const storedTokenDoc = await RefreshTokens.findOne({ userId: oldPayload.id, refreshToken })

        if (!storedTokenDoc) {
            throw new ErrorHandler(httpStatus.UNAUTHORIZED, authTokenMsg.invalidToken)
        }

        this.generateToken(oldPayload.id, 'access')
        const newRefreshToken = this.generateToken(oldPayload.id, 'refresh')

        await this.storeRefreshTokenForUser(oldPayload.id, newRefreshToken)
    }

    public static async revokeAllRefreshTokens(userId: string): Promise<void> {
        await RefreshTokens.deleteMany({ userId })
    }

    public static async verifyToken(token: string, type: 'access' | 'refresh'): Promise<string | jwt.JwtPayload> {
        const { jwtSecretAccess, jwtSecretRefresh } = getJwtConfig()
        let payload

        const secret = type === 'access' ? jwtSecretAccess : jwtSecretRefresh

        try {
            payload = jwt.verify(token, secret)
        } catch (error) {
            throw new ErrorHandler(httpStatus.BAD_REQUEST, authTokenMsg.couldNotVerifyToken)
        }

        return payload;
    }
}
