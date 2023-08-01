// External Libraries
import { type NextFunction, type Request, type Response } from 'express'

// Constants
import httpStatus from '@constants/httpStatus'

// Utils
import { createResponse } from '@utils/response'

// Middlewares
import { asyncHandler } from '@middlewares/asyncHandler'

// Components { Controllers, Models, Routes, Services, Validations }
import UserService from '@components/user/service/userService'
import { validateUser } from '@components/user/validation/userValidation'

// Configs and Messages
import { getUserMessages } from '@config/i18n/messages'

const msg = getUserMessages.controller

export default class UserController {
    public static getAllUsers = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
        try {
            const users = await UserService.getAllUsers()

            const [statusCode, response] = createResponse(httpStatus.OK, 'success', msg.usersFetched, users)
            res.status(statusCode).json(response)
        } catch (error) {
            next(error)
        }
    })

    public static createUser = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
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

    public static getUser = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
        try {
            const user = await UserService.getUser(req.params.id)

            const [statusCode, response] = createResponse(httpStatus.OK, 'success', msg.userFetched, user)
            res.status(statusCode).json(response)
        } catch (error) {
            next(error)
        }
    })

    public static updateUser = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
        try {
            const userData = req.body

            validateUser(userData)

            const user = await UserService.updateUser(req.params.id, userData)

            const [statusCode, response] = createResponse(httpStatus.OK, 'success', msg.userUpdated, user)
            res.status(statusCode).json(response)
        } catch (error) {
            next(error)
        }
    })

    public static deleteUser = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
        try {
            const user = await UserService.deleteUser(req.params.id)

            const [statusCode, response] = createResponse(httpStatus.NO_CONTENT, 'success', msg.userDeleted, user)
            res.status(statusCode).json(response)
        } catch (error) {
            next(error)
        }
    })
}
