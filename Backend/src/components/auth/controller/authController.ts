// External Libraries
import { type NextFunction, type Request, type Response } from 'express'

// Constants
import httpStatus from '@constants/httpStatus'

// Utils
import { createResponse } from '@utils/response'

// Middlewares
import { asyncHandler } from '@middlewares/asyncHandler'

// Components { Controllers, Models, Routes, Services, Validations }
import AuthService from 'components/auth/service/authService'
import UserService from '@components/user/service/userService'
import { validateUser } from '@components/user/validation/userValidation'

// Configs and Messages
import { getAuthMessages } from '@config/i18n/messages'

const msg = getAuthMessages.controller

export default class AuthController {
    public static login = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
        try {
            const userData = req.body

            const user = await UserService.getUserByEmailOrUsername(userData.email, userData.username, true)

            const authenticatedUser = await AuthService.authenticateUser(user, userData.password)

            const [statusCode, response] = createResponse(httpStatus.OK, 'success', msg.loginSuccessful, authenticatedUser)
            res.status(statusCode).json(response)
        } catch (error) {
            next(error)
        }
    })

    /*
    public static logout = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
        try {
            const userId = req.user.id

            await AuthService.revokeAllRefreshTokens(userId)

            res.status(httpStatus.OK).json({
                status: 'success',
                message: 'Logout successful'
            })
            const [statusCode, response] = createResponse(httpStatus.OK, 'success', 'Logout successful')
            res.status(statusCode).json(response)
        } catch (error) {
            next(error)
        }
    })
    */

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

            const [statusCode, response] = createResponse(httpStatus.OK, 'success', 'Refreshed access token', newTokens)
            res.status(statusCode).json(response)
        } catch (error) {
            next(error)
        }
    })
}
