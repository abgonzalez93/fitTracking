// Constants
import httpStatus from '@constants/httpStatus'

// Middlewares
import { ErrorHandler } from '@middlewares/errorHandler'

// Components { Controllers, Models, Routes, Services, Validations }
import Diet from '@components/diet/model/diet'
import { type DietInterface } from '@components/diet/model/dietInterface'
//import User from '@components/user/model/user'

// Configs and Messages
import { getDietMessages, getUserMessages } from '@config/i18n/messages'

const msg = getDietMessages.service

export default class DietService {
    public static async getAllDiets (): Promise<DietInterface[]> {
        /*
        if (userId === null || userId === undefined || userId.trim() === '') {
            throw new ErrorHandler(httpStatus.BAD_REQUEST, getUserMessages.service.userIdRequired)
        }

        const user = await User.findById(userId)

        if (user == null) {
            throw new ErrorHandler(httpStatus.NOT_FOUND, getUserMessages.service.userNotFound)
        }*/

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
