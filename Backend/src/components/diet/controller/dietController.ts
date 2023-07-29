// External Libraries
import { type NextFunction, type Request, type Response } from 'express'

// Constants
import httpStatus from '@constants/httpStatus'

// Middlewares
import { asyncHandler } from '@middlewares/asyncHandler'

// Components { Controllers, Models, Routes, Services, Validations }
import DietService from '@components/diet/service/dietService'
import { validateDiet } from '@components/diet/validation/dietValidation'

// Configs and Messages
import { getDietMessages } from '@config/i18n/messages'

const msg = getDietMessages.controller

export default class DietController {
    public static getAllDiets = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
        try {
            //const userId = req.body.user

            const diets = await DietService.getAllDiets()

            res.status(httpStatus.OK).json({
                status: 'success',
                message: msg.dietsFetched,
                data: diets
            })
        } catch (error) {
            next(error)
        }
    })

    public static createDiet = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
        try {
            const dietData = req.body

            validateDiet(dietData)

            const diet = await DietService.createDiet(dietData)

            res.status(httpStatus.CREATED).json({
                status: 'success',
                message: msg.dietCreated,
                data: diet
            })
        } catch (error) {
            next(error)
        }
    })

    /*
    public static getDiet = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
        try {
            const userId = req.body.user

            const diet = await DietService.getDiet(req.params.id, userId)

            res.status(httpStatus.OK).json({
                status: 'success',
                message: msg.dietFetched,
                data: diet
            })
        } catch(error) {
            next(error)
        }
    })

    public static updateDiet = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
        try {
            const dietData = req.body

            validateDiet(dietData)

            const diet = await DietService.updateDiet(req.params.id, dietData)

            res.status(httpStatus.OK).json({
                status: 'success',
                message: msg.dietUpdated,
                data: diet
            })
        } catch(error) {
            next(error)
        }
    })

    public static deleteDiet = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
        try {
            const diet = await DietService.deleteDiet(req.params.id)

            res.status(httpStatus.NO_CONTENT).json({
                status: 'success',
                message: msg.dietDeleted,
                data: diet
            })
        } catch(error) {
            next(error)
        }
    })
    */
}
