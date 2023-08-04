// External Libraries
import { type Request, type Response } from 'express'

// Constants
import httpStatus from '@constants/httpStatus'

// Utils
import { createResponse } from '@utils/createResponse'

// Messages
import { getApiMessages } from '@i18n/messages'

const msg = getApiMessages.controller

export default class ApiController {
    public static getWelcomeMessage = (req: Request, res: Response): void => {
        createResponse(res, httpStatus.OK, msg.welcomeMessage)
    }
}
