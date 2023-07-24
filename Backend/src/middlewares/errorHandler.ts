import { Request, Response, NextFunction } from 'express';
import { getErrorHandlerMessages } from '../config/i18n/messages/middlewares/errorHandlerMessages';
import httpStatus from '../constants/httpStatus';

export class ErrorHandler extends Error {
    statusCode: number;
    message: string;
    stack: string;

    constructor(statusCode: number, message: string, stack: string = '') {
        super(message);
        this.statusCode = statusCode;
        this.message = message;
        this.stack = stack;
    }
}

export const handleError = (err: ErrorHandler, req: Request, res: Response, next: NextFunction): void => {
    let { statusCode, message } = err;

    statusCode = statusCode || httpStatus.INTERNAL_SERVER_ERROR;

    message = message || getErrorHandlerMessages.handleError.internalServerError();

    let errorResponse: { status: string; statusCode: number; message: string; stack?: string } = {
        status: 'error',
        statusCode,
        message
    };

    if (process.env.NODE_ENV === 'develop') {
        errorResponse['stack'] = err.stack;
    }

    res.status(statusCode).json(errorResponse);
};

export const handle404Error = (req: Request, res: Response, next: NextFunction) => {
    if (!req.route) {
        next(new ErrorHandler(httpStatus.NOT_FOUND, getErrorHandlerMessages.handleError.error404()));
    } else {
        next();
    }
};