// External Libraries
import { Op } from 'sequelize'

// Constants
import httpStatus from '@constants/httpStatus'

// Utils
import HashService from '@utils/hashService'

// Middlewares
import { ErrorHandler } from '@middlewares/errorHandler'

// Components { Controllers, Models, Routes, Services, Validations }
import User from '@components/user/model/user'
import { type UserInterface } from '@components/user/model/userInterface'

// Configs and Messages
import { getUserMessages } from '@config/i18n/messages'

const msg = getUserMessages.service

export default class UserService {
    public static async getAllUsers (): Promise<UserInterface[]> {
        const users = await User.find()

        if (users.length === 0) {
            throw new ErrorHandler(httpStatus.NOT_FOUND, msg.errorGettingAllUsers)
        }

        return users
    }

    public static async createUser (userData: Required<Pick<UserInterface, 'name' | 'surname' | 'username' | 'email' | 'password'>>): Promise<UserInterface> {
        await this.validateUser(userData)

        const user = new User(userData)

        await user.save()

        return user
    }

    public static async getUser (id: string): Promise<UserInterface> {
        const user = await User.findById(id)

        if (user == null) {
            throw new ErrorHandler(httpStatus.NOT_FOUND, msg.userNotFound)
        }

        return user
    }

    public static async updateUser (id: string, userData: Pick<UserInterface, 'name' | 'surname' | 'username' | 'email' | 'password'>): Promise<UserInterface> {
        const currentUser = await User.findById(id).select('+password')

        if (currentUser == null) {
            throw new ErrorHandler(httpStatus.NOT_FOUND, msg.userNotFound)
        }

        await this.validateUser(userData, true, currentUser)

        Object.assign(currentUser, userData)
        const updatedUser = await currentUser.save()
        return updatedUser
    }

    public static async deleteUser (id: string): Promise<(UserInterface)> {
        const user = await User.findByIdAndDelete(id)

        if (user == null) {
            throw new ErrorHandler(httpStatus.NOT_FOUND, msg.userNotFound)
        }

        return user
    }

    public static async getUserByEmailOrUsername (email: string, username: string, includePassword: boolean = false): Promise<UserInterface> {
        let query = User.findOne({
            where: {
                [Op.or]: [
                    { email },
                    { username }
                ]
            }
        })

        if (includePassword) {
            query = query.select('+password')
        }

        const user = await query

        if (user == null) {
            throw new ErrorHandler(httpStatus.NOT_FOUND, msg.userNotFound)
        }

        return user
    }

    private static async validateUser (userData: Pick<UserInterface, 'username' | 'email' | 'password'>, isUpdate: boolean = false, currentUser?: Pick<UserInterface, 'username' | 'email' | 'password'>): Promise<void> {
        if (userData.password === null || userData.password === undefined || userData.password.trim() === '') {
            throw new ErrorHandler(httpStatus.BAD_REQUEST, msg.passwordMustBeProvided)
        }

        if (isUpdate && currentUser != null && currentUser.password !== undefined && currentUser.password !== '') {
            const isSamePassword = await HashService.comparePassword(userData.password, currentUser.password)

            if (isSamePassword) {
                throw new ErrorHandler(httpStatus.BAD_REQUEST, msg.passwordMustBeDifferentFromYourCurrent)
            }
        }

        if (userData.username !== null && userData.username !== undefined && userData.username.trim() !== '') {
            await this.validateField('username', userData.username, currentUser)
        }

        if (userData.email !== null && userData.email !== undefined && userData.email.trim() !== '') {
            await this.validateField('email', userData.email, currentUser)
        }
    }

    private static async validateField (field: 'username' | 'email', value: string, currentUser?: Pick<UserInterface, 'username' | 'email'>): Promise<void> {
        if ((currentUser === undefined || currentUser === null || currentUser[field] === undefined || value !== currentUser[field]) && await this.fieldExists(field, value)) {
            throw new ErrorHandler(httpStatus.BAD_REQUEST, field === 'username' ? msg.usernameAlreadyExists : msg.emailAlreadyExists)
        }
    }

    private static async fieldExists (field: string, value: string): Promise<boolean> {
        const query: Record<string, any> = {}
        query[field] = value
        const user = await User.findOne(query)
        return user !== null
    }
}
