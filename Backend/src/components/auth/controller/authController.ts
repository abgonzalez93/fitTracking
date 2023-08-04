// External Libraries
import { type NextFunction, type Request, type Response } from 'express'

// Constants
import httpStatus from '@constants/httpStatus'

// Utils
import { createResponse } from '@utils/createResponse'

// Middlewares
import { asyncHandler } from '@middlewares/asyncHandler'

// Components { Controllers, Models, Routes, Services, Validations }
import AuthService from '@auth/service/authService'
import UserService from '@api/services/userService'
import { validateUser } from '@api/validations/user/userValidation'

// Messages
import { getAuthMessages } from '@i18n/messages'

const msg = getAuthMessages.controller

export default class AuthController {
    public static login = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { email, username, password } = req.body
            const user = await UserService.getUserByEmailOrUsername(email, username, true)
            const authenticatedUser = await AuthService.authenticateUser(user, password)
            createResponse(res, httpStatus.OK, msg.loginSuccessful, authenticatedUser)
        } catch (error) {
            next(error)
        }
    })

    public static logout = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { userId, refreshToken } = req.body
            await AuthService.revokeToken(userId, refreshToken)
            createResponse(res, httpStatus.OK, msg.logoutSuccessful)
        } catch (error) {
            next(error)
        }
    })

    public static register = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
        try {
            const userData = req.body
            validateUser(userData)

            const user = await UserService.createUser(userData)
            createResponse(res, httpStatus.CREATED, msg.userCreated, user)
        } catch (error) {
            next(error)
        }
    })

    public static refresh = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
        try {
            const refreshToken = req.body.refreshToken
            const newTokens = await AuthService.refresh(refreshToken)
            createResponse(res, httpStatus.OK, msg.refreshedAccessToken, newTokens)
        } catch (error) {
            next(error)
        }
    })
}
