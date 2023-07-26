import { type Document } from 'mongoose'
import { ErrorHandler } from '@middlewares/errorHandler'
import { type DietInterface } from '@components/diet/model/dietInterface'
import Diet from '@components/diet/model/diet'
import { getDietMessages } from '@config/i18n/messages'
import httpStatus from '@constants/httpStatus'

const msg = getDietMessages.service

export default class UserService {
  public static async getAllDiets (userId: string): Promise<Array<DietInterface & Document>> {
    try {
      const diets = await Diet.find({ user: userId })
      return diets
    } catch (error: any) {
      throw new ErrorHandler(httpStatus.INTERNAL_SERVER_ERROR, msg.errorGettingAllDiets, error.stack)
    }
  }

  public static async createDiet (dietData: Partial<DietInterface>): Promise<(DietInterface & Document) | null> {
  }

  public static async getDiet (id: string): Promise<(DietInterface & Document) | null> {
  }

  public static async updateDiet (id: string, userData: Partial<DietInterface>): Promise<(DietInterface & Document) | null> {
  }

  public static async deleteDiet (id: string): Promise<(DietInterface & Document) | null> {
  }
}
