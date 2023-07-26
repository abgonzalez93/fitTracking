import { type Document } from 'mongoose'
import { ErrorHandler } from '@middlewares/errorHandler'
import { type UserInterface } from '@components/user/model/userInterface'
import User from '@components/user/model/user'
import HashService from '@utils/hashService'
import { getUserMessages } from '@config/i18n/messages'
import httpStatus from '@constants/httpStatus'

const msg = getUserMessages.service

export default class UserService {
  public static async getAllUsers (): Promise<Array<UserInterface & Document>> {
    try {
      const users = await User.find().select('-password')
      return users
    } catch (error: any) {
      throw new ErrorHandler(httpStatus.INTERNAL_SERVER_ERROR, msg.errorGettingAllUsers, error.stack)
    }
  }

  public static async createUser (userData: Partial<UserInterface>): Promise<(UserInterface & Document) | null> {
    try {
      if (userData.password === null || userData.password === undefined || userData.password.trim() === '') {
        throw new ErrorHandler(httpStatus.BAD_REQUEST, msg.passwordMustBeProvided)
      }

      if (userData.username !== null && userData.username !== undefined && userData.username.trim() !== '' && await this.fieldExists('username', userData.username)) {
        throw new ErrorHandler(httpStatus.BAD_REQUEST, msg.usernameAlreadyExists)
      }

      if (userData.email !== null && userData.email !== undefined && userData.email.trim() !== '' && await this.fieldExists('email', userData.email)) {
        throw new ErrorHandler(httpStatus.BAD_REQUEST, msg.emailAlreadyExists)
      }

      const user = new User(userData)

      await user.save()
      return user
    } catch (error: any) {
      throw new ErrorHandler(httpStatus.INTERNAL_SERVER_ERROR, msg.errorCreatingUser, error.stack)
    }
  }

  public static async getUser (id: string): Promise<(UserInterface & Document) | null> {
    try {
      const user = await User.findById(id).select('-password')

      if (user === null) {
        throw new ErrorHandler(httpStatus.NOT_FOUND, msg.userNotFound)
      }

      return user
    } catch (error: any) {
      throw new ErrorHandler(httpStatus.INTERNAL_SERVER_ERROR, msg.errorGettingUser, error.stack)
    }
  }

  public static async updateUser (id: string, userData: Partial<UserInterface>): Promise<(UserInterface & Document) | null> {
    try {
      const currentUser = await User.findById(id)

      if (currentUser === null) {
        throw new ErrorHandler(httpStatus.NOT_FOUND, msg.userNotFound)
      }

      if (userData.password !== null && userData.password !== undefined && userData.password.trim() !== '') {
        const isSamePassword = await HashService.comparePassword(userData.password, currentUser.password)

        if (isSamePassword) {
          throw new ErrorHandler(httpStatus.BAD_REQUEST, msg.passwordMustBeDifferentFromYourCurrent)
        }
      }

      if (userData.username !== null && userData.username !== undefined && userData.username.trim() !== '' && currentUser?.username !== undefined && userData.username !== currentUser.username && await this.fieldExists('username', userData.username)) {
        throw new ErrorHandler(httpStatus.BAD_REQUEST, msg.usernameAlreadyExists)
      }

      if (userData.email !== null && userData.email !== undefined && userData.email.trim() !== '' && currentUser?.email !== undefined && userData.email !== currentUser.email && await this.fieldExists('email', userData.email)) {
        throw new ErrorHandler(httpStatus.BAD_REQUEST, msg.emailAlreadyExists)
      }

      Object.assign(currentUser, userData)
      await currentUser.save()

      const user = await User.findById(id).select('-password')
      return user
    } catch (error: any) {
      throw new ErrorHandler(httpStatus.INTERNAL_SERVER_ERROR, msg.errorUpdatingUser, error.stack)
    }
  }

  public static async deleteUser (id: string): Promise<(UserInterface & Document) | null> {
    try {
      const user = await User.findByIdAndDelete(id)

      if (user === null) {
        throw new ErrorHandler(httpStatus.NOT_FOUND, msg.userNotFound)
      }

      return user
    } catch (error: any) {
      throw new ErrorHandler(httpStatus.INTERNAL_SERVER_ERROR, msg.errorDeletingUser, error.stack)
    }
  }

  private static async fieldExists (field: string, value: string): Promise<boolean> {
    const query: Record<string, any> = {}
    query[field] = value

    const user = await User.findOne(query)
    return user === null
  }
}
