// External Libraries
import { type Request, type Response, type NextFunction } from 'express'

// Constants
import httpStatus from '@constants/httpStatus'

// Utils
import logger from '@utils/logger'
import { createResponse } from '@utils/createResponse'

// Config
import config from '@config/config'

// Messages
import { getErrorHandlerMessages } from '@i18n/messages'

const msg = getErrorHandlerMessages.errorHandler

export class ErrorHandler extends Error {
    readonly statusCode: number
    readonly message: string

    constructor (statusCode: number, message: string) {
        super(message)
        this.statusCode = statusCode
        this.message = message
        Error.captureStackTrace(this, this.constructor)
    }
}

export const handleError = (err: Error | ErrorHandler, req: Request, res: Response, next: NextFunction): void => {
    if (err instanceof ErrorHandler) {
        const { statusCode, message } = err

        let developmentStack = ''

        if (config.NODE_ENV === 'develop' && err.stack != null) {
            developmentStack = err.stack
        }

        createResponse(res, statusCode, message, {}, developmentStack)
    } else {
        logger.error(err)
        createResponse(res, httpStatus.INTERNAL_SERVER_ERROR, msg.somethingWentWrong)
    }
}

export const handle404Error = (req: Request, res: Response, next: NextFunction): void => {
    next(new ErrorHandler(httpStatus.NOT_FOUND, msg.error404))
}
