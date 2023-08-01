// External Libraries
import { type Request, type Response } from 'express'

// Constants
import httpStatus from '@constants/httpStatus'

// Utils
import { createResponse } from '@utils/response'

// Configs and Messages
import { getApiMessages } from '@config/i18n/messages'

const msg = getApiMessages.controller

export default class ApiController {
    public static getWelcomeMessage = (req: Request, res: Response): void => {
        const [statusCode, response] = createResponse(httpStatus.OK, 'success', msg.welcomeMessage)
        res.status(statusCode).json(response)
    }
}
