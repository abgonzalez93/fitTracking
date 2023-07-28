// External Libraries
import { type Request, type Response, type NextFunction } from 'express'

// Constants
import httpStatus from '@constants/httpStatus'

// Configs and Messages
import { getErrorHandlerMessages } from '@config/i18n/messages'

export class ErrorHandler extends Error {
    readonly statusCode: number
    readonly message: string
    readonly stack: string

    constructor (statusCode: number, message: string, stack: string = '') {
        super(message)
        this.statusCode = statusCode
        this.message = message
        this.stack = stack
    }
}

export const handleError = (error: ErrorHandler, req: Request, res: Response, next: NextFunction): void => {
    const statusCode = error.statusCode !== undefined ? error.statusCode : httpStatus.INTERNAL_SERVER_ERROR
    const message = error.message !== undefined ? error.message : getErrorHandlerMessages.handleError.internalServerError()

    const errorResponse: { status: string, statusCode: number, message: string, stack?: string } = {
        status: 'error',
        statusCode,
        message
    }

    if (process.env.NODE_ENV === 'develop' && error instanceof ErrorHandler) {
        errorResponse.stack = error.stack
    }

    res.status(statusCode).json(errorResponse)
}

export const handle404Error = (req: Request, res: Response, next: NextFunction): void => {
    if (req.route == null) {
        next(new ErrorHandler(httpStatus.NOT_FOUND, getErrorHandlerMessages.handleError.error404()))
    } else {
        next()
    }
}
