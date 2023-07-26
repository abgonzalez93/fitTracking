import { type Request, type Response, type NextFunction } from 'express'

const asyncHandler = (fn: (req: Request, res: Response, next: NextFunction) => Promise<any>) => {
    return (req: Request, res: Response, next: NextFunction): void => {
        fn(req, res, next).catch(next)
    }
}

export default asyncHandler
