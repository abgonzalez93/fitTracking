// Constants
import httpStatus from '@constants/httpStatus'

// Middlewares
import { ErrorHandler } from '@middlewares/errorHandler'

// Components { Controllers, Models, Routes, Services, Validations }
import Diet from '@api/models/diet/dietSchema'
import { type DietInterface } from '@api/models/diet/dietInterface'
// import User from '@components/user/model/user'

// Messages
import { getDietMessages } from '@i18n/messages'

const msg = getDietMessages.service

export default class DietService {
    public static async getAllDiets (): Promise<DietInterface[]> {
        const diets = await Diet.find()

        if (diets.length === 0) {
            throw new ErrorHandler(httpStatus.INTERNAL_SERVER_ERROR, msg.errorGettingAllDiets)
        }

        return diets
    }

    public static async createDiet (dietData: Partial<DietInterface>): Promise<DietInterface> {
        const diet = new Diet(dietData)
        await diet.save()
        return diet
    }

    /*
    public static async getDiet (id: string, userId: string): Promise<DietInterface> {
    }

    public static async updateDiet (id: string, dietData: Partial<DietInterface>): Promise<DietInterface> {
    }

    public static async deleteDiet (id: string): Promise<DietInterface> {
    }
    */
}
