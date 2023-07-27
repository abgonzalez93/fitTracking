import { type Document } from 'mongoose'
import { ErrorHandler } from '@middlewares/errorHandler'
import { type DietInterface } from '@components/diet/model/dietInterface'
import Diet from '@components/diet/model/diet'
import User from '@components/user/model/user'
import { getDietMessages, getUserMessages } from '@config/i18n/messages'
import httpStatus from '@constants/httpStatus'

const msg = getDietMessages.service

export default class DietService {
    public static async getAllDiets (userId: string): Promise<Array<DietInterface & Document>> {
        if (userId === null || userId === undefined || userId.trim() === '') {
            throw new ErrorHandler(httpStatus.BAD_REQUEST, getUserMessages.service.userIdRequired)
        }

        const user = await User.findById(userId)

        if (!user) {
            throw new ErrorHandler(httpStatus.NOT_FOUND, getUserMessages.service.userNotFound)
        }

        let diets = await Diet.find({ user: userId })

        if(!diets){
            throw new ErrorHandler(httpStatus.INTERNAL_SERVER_ERROR, msg.errorGettingAllDiets)
        }

        diets = diets.map(diet => diet.toJSON())

        return diets
    }

    public static async createDiet (dietData: Partial<DietInterface>): Promise<(DietInterface & Document) | null> {
        let diet = new Diet(dietData)
        await diet.save()

        diet = diet.toJSON()
        return diet
    }

    /*
    public static async getDiet (id: string, userId: string): Promise<(DietInterface & Document) | null> {
    }

    public static async updateDiet (id: string, dietData: Partial<DietInterface>): Promise<(DietInterface & Document) | null> {
    }

    public static async deleteDiet (id: string): Promise<(DietInterface & Document) | null> {
    }
    */
}
