import { type NextFunction, type Request, type Response } from 'express'
import UserService from '@components/user/service/userService'
import asyncHandler from '@middlewares/asyncHandler'
import { validateUser } from '@components/user/validation/userValidation'
import { getUserMessages } from '@config/i18n/messages'
import httpStatus from '@constants/httpStatus'

const msg = getUserMessages.controller

export default class UserController {
    public static getAllUsers = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
        const users = await UserService.getAllUsers()

        res.status(httpStatus.OK).json({
            status: 'success',
            message: msg.usersFetched,
            data: users
        })
    })

    public static createUser = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
        const userData = req.body

        validateUser(userData)

        const user = await UserService.createUser(userData)

        res.status(httpStatus.CREATED).json({
            status: 'success',
            message: msg.userCreated,
            data: user
        })
    })

    public static getUser = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
        const user = await UserService.getUser(req.params.id)

        res.status(httpStatus.OK).json({
            status: 'success',
            message: msg.userFetched,
            data: user
        })
    })

    public static updateUser = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
        const userData = req.body

        validateUser(userData)

        const user = await UserService.updateUser(req.params.id, userData)

        res.status(httpStatus.OK).json({
            status: 'success',
            message: msg.userUpdated,
            data: user
        })
    })

    public static deleteUser = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
        const user = await UserService.deleteUser(req.params.id)

        res.status(httpStatus.NO_CONTENT).json({
            status: 'success',
            message: msg.userDeleted,
            data: user
        })
    })
}
