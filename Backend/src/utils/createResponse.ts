// External Libraries
import { type Response } from 'express'

// Constants
import resStatus from '@constants/resStatus'

export function createResponse (res: Response, httpStatusCode: number, message: string, data?: any): void {
    const status = httpStatusCode >= 200 && httpStatusCode < 300 ? resStatus.SUCCESS : resStatus.ERROR

    res.status(httpStatusCode).json({
        status,
        message,
        data
    })
}
