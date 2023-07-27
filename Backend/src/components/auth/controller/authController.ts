import { NextFunction, Request, Response } from 'express'
import { asyncHandler } from '@middlewares/asyncHandler'
import UserService from '@components/user/service/userService'
import { validateUser } from '@components/user/validation/userValidation'
import { getAuthMessages } from '@config/i18n/messages'
import httpStatus from '@constants/httpStatus'
import HashService from '@utils/hashService'

const msg = getAuthMessages.controller

export default class AuthController {
    public static register = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
        try {
            const userData = req.body

            validateUser(userData)

            const user = await UserService.createUser(userData)

            res.status(httpStatus.CREATED).json({
                status: 'success',
                message: msg,
                data: user
            })
        } catch(error) {
            next(error)
        }
})

    public static login = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
        try {
            const userData = req.body
            const email = userData.email
            const password = userData.password

            let user = await UserService.getUserByEmail(email)

            if (!user || !(await HashService.comparePassword(password, user.password))) {

                res.status(httpStatus.UNAUTHORIZED).json({
                    status: 'error',
                    message: msg
                })

                return
            }

            const token = UserService.generateToken(user)

            user = user.toJSON()

            res.status(httpStatus.OK).json({
                status: 'success',
                message: msg,
                data: { user, token }
            })
        } catch(error) {
            next(error)
        }
    })
}
