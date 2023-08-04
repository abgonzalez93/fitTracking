// External Libraries
import { type NextFunction, type Request, type Response } from 'express'

// Constants
import httpStatus from '@constants/httpStatus'

// Utils
import { createResponse } from '@utils/createResponse'

// Middlewares
import { asyncHandler } from '@middlewares/asyncHandler'

// Components { Controllers, Models, Routes, Services, Validations }
import UserService from '@api/services/userService'
import { validateUser } from '@api/validations/user/userValidation'

// Configs and Messages
import { getUserMessages } from '@i18n/messages'

const msg = getUserMessages.controller

export default class UserController {
    public static getAllUsers = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
        try {
            const users = await UserService.getAllUsers()
            createResponse(res, httpStatus.OK, msg.usersFetched, users)
        } catch (error) {
            next(error)
        }
    })

    public static createUser = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
        try {
            const userData = req.body
            validateUser(userData)

            const user = await UserService.createUser(userData)
            createResponse(res, httpStatus.CREATED, msg.userCreated, user)
        } catch (error) {
            next(error)
        }
    })

    public static getUser = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
        try {
            const user = await UserService.getUser(req.params.id)
            createResponse(res, httpStatus.OK, msg.userFetched, user)
        } catch (error) {
            next(error)
        }
    })

    public static updateUser = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
        try {
            const userData = req.body
            validateUser(userData)

            const user = await UserService.updateUser(req.params.id, userData)
            createResponse(res, httpStatus.OK, msg.userUpdated, user)
        } catch (error) {
            next(error)
        }
    })

    public static deleteUser = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
        try {
            const user = await UserService.deleteUser(req.params.id)
            createResponse(res, httpStatus.NO_CONTENT, msg.userDeleted, user)
        } catch (error) {
            next(error)
        }
    })
}
