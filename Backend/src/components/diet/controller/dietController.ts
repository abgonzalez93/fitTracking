import { type NextFunction, type Request, type Response } from 'express'
import DietService from '@components/diet/service/dietService'
import asyncHandler from '@middlewares/asyncHandler'
import { validateDiet } from '@components/diet/validation/dietValidation'
import { getDietMessages } from '@config/i18n/messages'
import httpStatus from '@constants/httpStatus'

const msg = getDietMessages.controller

export default class DietController {
    public static getAllDiets = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
        const userId = req.body.user

        const diets = await DietService.getAllDiets(userId)

        res.status(httpStatus.OK).json({
            status: 'success',
            message: msg.dietsFetched,
            data: diets
        })
    })

    public static createDiet = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
        const dietData = req.body

        validateDiet(dietData)

        const diet = await DietService.createDiet(dietData)

        res.status(httpStatus.CREATED).json({
            status: 'success',
            message: msg.dietCreated,
            data: diet
        })
    })

    public static getDiet = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
        const diet = await DietService.getDiet(req.params.id)

        res.status(httpStatus.OK).json({
            status: 'success',
            message: msg.dietFetched,
            data: diet
        })
    })

    public static updateDiet = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
        const dietData = req.body

        validateDiet(dietData)

        const diet = await DietService.updateDiet(req.params.id, dietData)

        res.status(httpStatus.OK).json({
            status: 'success',
            message: msg.dietUpdated,
            data: diet
        })
    })

    public static deleteDiet = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
        const diet = await DietService.deleteDiet(req.params.id)

        res.status(httpStatus.NO_CONTENT).json({
            status: 'success',
            message: msg.dietDeleted,
            data: diet
        })
    })
}
