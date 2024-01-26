// External Libraries
import { type NextFunction, type Request, type Response } from 'express'

// Constants
import httpStatus from '@constants/httpStatus'

// Utils
import { createResponse } from '@utils/createResponse'

// Middlewares
import { asyncHandler } from '@middlewares/asyncHandler'

// Components { Controllers, Models, Routes, Services, Validations }
import DietService from '@api/services/dietService'
import { validateDiet } from '@api/validations/diet/dietValidation'

// Messages
import { getDietMessages } from '@i18n/messages'

const msg = getDietMessages.controller

export default class DietController {
    public static getAllDiets = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
        try {
            const diets = await DietService.getAllDiets()
            createResponse(res, httpStatus.OK, msg.dietsFetched, diets)
        } catch (error) {
            next(error)
        }
    })

    public static createDiet = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
        try {
            const dietData = req.body
            validateDiet(dietData)

            const diet = await DietService.createDiet(dietData)
            createResponse(res, httpStatus.OK, msg.dietCreated, diet)
        } catch (error) {
            next(error)
        }
    })


    public static getDiet = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
        try {
            const diet = await DietService.getDiet(req.params.id)
            createResponse(res, httpStatus.OK, msg.dietFetched, diet)
        } catch (error) {
            next(error)
        }
    })

    public static updateDiet = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
        try {
            const dietData = req.body
            validateDiet(dietData)

            const diet = await DietService.updateDiet(req.params.id, dietData)
            createResponse(res, httpStatus.OK, msg.dietUpdated, diet)
        } catch (error) {
            next(error)
        }
    })

    public static deleteDiet = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
        try {
            const diet = await DietService.deleteDiet(req.params.id)
            createResponse(res, httpStatus.NO_CONTENT, msg.dietDeleted, diet)
        } catch (error) {
            next(error)
        }
    })
}
