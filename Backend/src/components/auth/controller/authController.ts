// External Libraries
import { type NextFunction, type Request, type Response } from 'express'

// Constants
import httpStatus from '@constants/httpStatus'

// Utils
import { createResponse } from '@utils/response'

// Middlewares
import { asyncHandler } from '@middlewares/asyncHandler'

// Components { Controllers, Models, Routes, Services, Validations }
import AuthService from '@auth/services/authService'
import UserService from '@api/services/userService'
import { validateUser } from '@api/validations/user/userValidation'

// Configs and Messages
import { getAuthMessages } from '@i18n/messages'

const msg = getAuthMessages.controller

export default class AuthController {
    public static login = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { email, username, password } = req.body

            const user = await UserService.getUserByEmailOrUsername(email, username, true)

            const authenticatedUser = await AuthService.authenticateUser(user, password)

            const [statusCode, response] = createResponse(httpStatus.OK, 'success', msg.loginSuccessful, authenticatedUser)
            res.status(statusCode).json(response)
        } catch (error) {
            next(error)
        }
    })

    public static logout = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { userId, refreshToken } = req.body

            await AuthService.revokeToken(userId, refreshToken)

            const [statusCode, response] = createResponse(httpStatus.OK, 'success', msg.logoutSuccessful)
            res.status(statusCode).json(response)
        } catch (error) {
            next(error)
        }
    })

    public static register = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
        try {
            const userData = req.body

            validateUser(userData)

            const user = await UserService.createUser(userData)

            const [statusCode, response] = createResponse(httpStatus.CREATED, 'success', msg.userCreated, user)
            res.status(statusCode).json(response)
        } catch (error) {
            next(error)
        }
    })

    public static refresh = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
        try {
            const refreshToken = req.body.refreshToken

            const newTokens = await AuthService.refresh(refreshToken)

            const [statusCode, response] = createResponse(httpStatus.OK, 'success', msg.refreshedAccessToken, newTokens)
            res.status(statusCode).json(response)
        } catch (error) {
            next(error)
        }
    })
}
