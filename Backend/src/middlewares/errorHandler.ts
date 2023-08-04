// External Libraries
import { type Request, type Response, type NextFunction } from 'express'

// Constants
import httpStatus from '@constants/httpStatus'

// Utils
import { createResponse } from '@utils/createResponse'

// Configs and Messages
import config from '@config/config'
import { getErrorHandlerMessages } from '@i18n/messages'

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

        const developmentStack = config.NODE_ENV === 'develop' ? { stack: err.stack } : {}

        createResponse(res, statusCode, message, developmentStack)
    } else {
        next(err)
    }
}

export const handle404Error = (req: Request, res: Response, next: NextFunction): void => {
    next(new ErrorHandler(httpStatus.NOT_FOUND, getErrorHandlerMessages.handleError.error404))
}
