// External Libraries
import { type NextFunction, type Request, type Response } from 'express'

// Constants
import httpStatus from '@constants/httpStatus'

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

            const user = await AuthService.authenticateUser(userData.email, userData.username, userData.password)

            res.status(httpStatus.OK).json({
                status: 'success',
                message: msg.loginSuccessful,
                data: user
            })
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

            res.status(httpStatus.CREATED).json({
                status: 'success',
                message: msg.userCreated,
                data: user
            })
        } catch (error) {
            next(error)
        }
    })

    public static refresh = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
        try {
            const refreshToken = req.body.refreshToken

            await AuthService.refreshToken(refreshToken)

            res.status(httpStatus.OK).json({
                status: 'success',
                message: 'Refreshed access token'
            })
        } catch (error) {
            next(error)
        }
    })
}
