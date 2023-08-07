// Constants
import httpStatus from '@constants/httpStatus'

// Utils
import HashService from '@utils/hashService'

// Middlewares
import { ErrorHandler } from '@middlewares/errorHandler'

// Components { Controllers, Models, Routes, Services, Validations }
import AuthService from '@auth/service/authService'
import User from '@api/models/user/userSchema'
import { type UserInterface } from '@api/models/user/userInterface'

// Messages
import { getUserMessages } from '@i18n/messages'

const msg = getUserMessages.service

type QueryCondition = Record<string, string>
type QueryType = Record<string, string | QueryCondition[] | QueryCondition>

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

        await AuthService.generateAndStoreTokens(user._id)

        return user
    }

    public static async getUser (id: string): Promise<UserInterface> {
        return await this.getUserOrThrow(id)
    }

    public static async updateUser (id: string, userData: Pick<UserInterface, 'name' | 'surname' | 'username' | 'email' | 'password'>): Promise<UserInterface> {
        const currentUser = await this.getUserOrThrow(id, true)

        await this.validateUser(userData, true, currentUser)

        Object.assign(currentUser, userData)

        const updatedUser = await currentUser.save()

        return updatedUser
    }

    public static async deleteUser (id: string): Promise<(UserInterface)> {
        const user = await this.getUserOrThrow(id)

        await User.deleteOne({ _id: id })

        return user
    }

    public static async getUserByEmailOrUsername (email?: string, username?: string, includePassword: boolean = false): Promise<UserInterface> {
        if ((email == null || email.trim() === '') && (username == null || username.trim() === '')) {
            throw new ErrorHandler(httpStatus.BAD_REQUEST, msg.emailOrUsernameMustBeProvided)
        }

        const orQuery: Array<Record<string, string>> = []

        if (email != null && email.trim() !== '') {
            orQuery.push({ email })
        }

        if (username != null && username.trim() !== '') {
            orQuery.push({ username })
        }

        const query = { $or: orQuery }

        const user = await this.findUserByQuery(query, includePassword)

        return user
    }

    private static async findUserByQuery (query: QueryType, includePassword: boolean = false): Promise<UserInterface> {
        let queryResult = User.findOne(query)

        if (includePassword) {
            queryResult = queryResult.select('+password')
        }

        const user = await queryResult

        if (user == null) {
            throw new ErrorHandler(httpStatus.NOT_FOUND, msg.userNotFound)
        }

        return user
    }

    private static async getUserOrThrow (id: string, includePassword: boolean = false): Promise<UserInterface> {
        return await this.findUserByQuery({ _id: id }, includePassword)
    }

    private static async validateUser (userData: Pick<UserInterface, 'username' | 'email' | 'password'>, isUpdate: boolean = false, currentUser?: Pick<UserInterface, 'username' | 'email' | 'password'>): Promise<void> {
        await Promise.all([
            this.validatePassword(userData, isUpdate, currentUser),
            this.validateInput(userData, 'username', msg.usernameAlreadyExists, currentUser),
            this.validateInput(userData, 'email', msg.emailAlreadyExists, currentUser)
        ])
    }

    private static async validatePassword (userData: Pick<UserInterface, 'password'>, isUpdate: boolean, currentUser?: Pick<UserInterface, 'password'>): Promise<void> {
        if (userData.password?.trim() === '' || userData.password == null) {
            throw new ErrorHandler(httpStatus.BAD_REQUEST, msg.passwordMustBeProvided)
        }

        if (isUpdate && currentUser != null && currentUser.password?.trim() !== '') {
            await this.comparePassword(userData.password, currentUser.password)
        }
    }

    private static async comparePassword (password: string, currentPassword: string): Promise<void> {
        const isSamePassword = await HashService.comparePassword(password, currentPassword)

        if (isSamePassword) {
            throw new ErrorHandler(httpStatus.BAD_REQUEST, msg.passwordMustBeDifferentFromYourCurrent)
        }
    }

    private static async validateInput (userData: Pick<UserInterface, 'username' | 'email'>, field: 'username' | 'email', errorMessage: string, currentUser?: Pick<UserInterface, 'username' | 'email'>): Promise<void> {
        if (userData[field] != null && userData[field].trim() !== '') {
            const query: Record<string, string> = {}
            query[field] = userData[field]
            const user = await User.findOne(query)

            if (user !== null && (currentUser === undefined || currentUser[field] !== userData[field])) {
                throw new ErrorHandler(httpStatus.BAD_REQUEST, errorMessage)
            }
        }
    }
}
