import { Request, Response, NextFunction } from 'express';
import messages from '../config/i18n/messages/messages';

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

    statusCode = statusCode || 500;
    message = message || messages.src.middlewares.errorHandler.handleError.internalServerError;

    let errorResponse: { status: string; statusCode: number; message: string; stack?: string } = {
        status: 'error',
        statusCode,
        message
    };

    if (process.env.NODE_ENV === 'development') {
        errorResponse['stack'] = err.stack;
    }

    res.status(statusCode).json(errorResponse);
};