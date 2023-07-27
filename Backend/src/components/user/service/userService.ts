import jwt from 'jsonwebtoken'
import { Op } from 'sequelize';
import { type Document } from 'mongoose'
import { ErrorHandler } from '@middlewares/errorHandler'
import { getJwtConfig } from '@middlewares/authentication'
import { type UserInterface } from '@components/user/model/userInterface'
import User from '@components/user/model/user'
import HashService from '@utils/hashService'
import { getUserMessages } from '@config/i18n/messages'
import httpStatus from '@constants/httpStatus'
import { getAuthenticationMessages } from '@config/i18n/messages/middlewares/authenticationMessages'

const msg = getUserMessages.service
const authMsg = getAuthenticationMessages.authentication

export default class UserService {
    public static async getAllUsers (): Promise<Array<UserInterface & Document>> {
        const users = await User.find()

        if (!users) {
            throw new ErrorHandler(httpStatus.NOT_FOUND, msg.errorGettingAllUsers)
        }

        return users
    }

    public static async createUser (userData: Partial<UserInterface>): Promise<(UserInterface & Document) | null> {
        if (!userData.password || userData.password.trim() === '') {
            throw new ErrorHandler(httpStatus.BAD_REQUEST, msg.passwordMustBeProvided)
        }

        if (userData.username && userData.username.trim() !== '' && await this.fieldExists('username', userData.username)) {
            throw new ErrorHandler(httpStatus.BAD_REQUEST, msg.usernameAlreadyExists)
        }

        if (userData.email && userData.email.trim() !== '' && await this.fieldExists('email', userData.email)) {
            throw new ErrorHandler(httpStatus.BAD_REQUEST, msg.emailAlreadyExists)
        }

        const user = new User(userData)
        await user.save()
        return user
    }

    public static async getUser (id: string): Promise<(UserInterface & Document) | null> {
        const user = await User.findById(id)

        if (!user) {
            throw new ErrorHandler(httpStatus.NOT_FOUND, msg.userNotFound)
        }

        return user
    }

    public static async updateUser (id: string, userData: Partial<UserInterface>): Promise<(UserInterface & Document) | null> {
        const currentUser = await User.findById(id).select('+password');

        if (!currentUser) {
            throw new ErrorHandler(httpStatus.NOT_FOUND, msg.userNotFound)
        }

        if (userData.password && userData.password.trim() !== '') {
            const isSamePassword = await HashService.comparePassword(userData.password, currentUser.password)

            if (isSamePassword) {
                throw new ErrorHandler(httpStatus.BAD_REQUEST, msg.passwordMustBeDifferentFromYourCurrent)
            }
        }

        if (userData.username && userData.username.trim() !== '' && currentUser?.username && userData.username !== currentUser.username && await this.fieldExists('username', userData.username)) {
            throw new ErrorHandler(httpStatus.BAD_REQUEST, msg.usernameAlreadyExists)
        }

        if (userData.email && userData.email.trim() !== '' && currentUser?.email && userData.email !== currentUser.email && await this.fieldExists('email', userData.email)) {
            throw new ErrorHandler(httpStatus.BAD_REQUEST, msg.emailAlreadyExists)
        }

        Object.assign(currentUser, userData)
        await currentUser.save()

        const user = await User.findById(id)
        return user
    }

    public static async deleteUser (id: string): Promise<(UserInterface & Document) | null> {
        const user = await User.findByIdAndDelete(id)

        if (!user) {
            throw new ErrorHandler(httpStatus.NOT_FOUND, msg.userNotFound)
        }

        return user
    }

    public static async getUserByEmailOrUsername(userData: Partial<UserInterface>, includePassword: boolean = false): Promise<(UserInterface & Document) | null> {
        let query = User.findOne({
            where: {
                [Op.or]: [
                    { email: userData.email },
                    { username: userData.username }
                ]
            }
        })

        if (includePassword) {
            query = query.select('+password');
        }

        let user = await query;

        if (!user) {
            throw new ErrorHandler(httpStatus.NOT_FOUND, msg.userNotFound)
        }

        return user
    }

    public static async authenticateUser(userData: Partial<UserInterface>): Promise<{ user: UserInterface, token: string }> {
        const user = await this.getUserByEmailOrUsername(userData, true);

        if (!user) {
            throw new ErrorHandler(httpStatus.NOT_FOUND, msg.userNotFound)
        }

        if(userData.password){
            const comparePassword = await HashService.comparePassword(userData.password, user.password);

            if (!comparePassword) {
                throw new ErrorHandler(httpStatus.UNAUTHORIZED, msg.userNotFound);
            }
        }

        const token = this.generateToken(user);

        return { user, token };
    }

    private static async fieldExists (field: string, value: string): Promise<boolean> {
        const query: Record<string, any> = {}
        query[field] = value
        const user = await User.findOne(query)
        return user !== null
    }

    public static generateToken(userData: Partial<UserInterface>): string {
        if (!userData || !userData._id) {
            throw new ErrorHandler(httpStatus.BAD_REQUEST, authMsg.invalidUserData)
        }

        const { jwtSecret, jwtExpires } = getJwtConfig()

        const payload = { id: userData._id }

        return jwt.sign(payload, jwtSecret, { expiresIn: jwtExpires })
    }
}
