// External Libraries
import { type Request, type Response } from 'express'

// Constants
import httpStatus from '@constants/httpStatus'

// Configs and Messages
import { getApiMessages } from '@config/i18n/messages'

const msg = getApiMessages.controller

export default class ApiController {
    public static getWelcomeMessage = (req: Request, res: Response): void => {
        res.status(httpStatus.OK).json({
            status: 'success',
            message: msg.welcomeMessage
        })
    }
}
