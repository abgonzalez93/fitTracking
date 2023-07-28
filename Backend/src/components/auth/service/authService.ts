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
import { type UserInterface } from '@components/user/model/userInterface'
import UserService from '@components/user/service/userService'

// Configs and Messages
import { getUserMessages, getAuthMessages } from '@config/i18n/messages'

const userMsg = getUserMessages.service
const authMsg = getAuthMessages.service

export default class AuthService {
    public static async authenticateUser (email: string, username: string, password: string): Promise<{ user: UserInterface, token: string }> {
        const user = await UserService.getUserByEmailOrUsername(email, username, true)

        if (user === null || user === undefined) {
            throw new ErrorHandler(httpStatus.NOT_FOUND, userMsg.userNotFound)
        }

        const comparePassword = await HashService.comparePassword(password, user.password)

        if (!comparePassword) {
            throw new ErrorHandler(httpStatus.UNAUTHORIZED, authMsg.wrongCredentials)
        }

        const token = this.generateToken(user._id)

        return { user, token }
    }

    public static generateToken (id: string): string {
        if (id === null || id === undefined || id === '') {
            throw new ErrorHandler(httpStatus.BAD_REQUEST, authMsg.invalidUserData)
        }

        const { jwtSecret, jwtExpires } = getJwtConfig()

        const payload = { id }

        return jwt.sign(payload, jwtSecret, { expiresIn: jwtExpires })
    }
}
