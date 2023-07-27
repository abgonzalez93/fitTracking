import { type Document } from 'mongoose'
import { ErrorHandler } from '@middlewares/errorHandler'
import { type UserInterface } from '@components/user/model/userInterface'
import User from '@components/user/model/user'
import { getAuthMessages } from '@config/i18n/messages'
import httpStatus from '@constants/httpStatus'

const msg = getAuthMessages.service

export default class AuthService {
    public static async register (userData: Partial<UserInterface>): Promise<(UserInterface & Document) | null> {
        return userData
    }

    public static async login (userData: Partial<UserInterface>): Promise<(UserInterface & Document) | null> {
        return userData
    }
}
