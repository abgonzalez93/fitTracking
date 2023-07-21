import { Document } from 'mongoose';
import { ErrorHandler } from '../../../middlewares/errorHandler';
import { UserInterface } from '../model/userInterface';
import User from '../model/user';
import HashService from '../../../utils/hashService';
import messages from '../../../config/i18n/en/messages'

const msg = messages.src.components.user.service;

export default class UserService {
    public static async getAllUsers(): Promise<(UserInterface & Document)[]> {
        try {
            const users = await User.find().select('-password');
            return users;
        } catch (error: any) {
            throw new ErrorHandler(500, msg.errorGettingAllUsers, error.stack);
        }
    }

    public static async createUser(userData: Partial<UserInterface>): Promise<(UserInterface & Document) | null> {
        try {
            if (!userData.password) {
                throw new ErrorHandler(400, msg.passwordMustBeProvided);
            }

            if (userData.username && await this.fieldExists('username', userData.username)) {
                throw new ErrorHandler(400, msg.usernameAlreadyExists);
            }
    
            if (userData.email && await this.fieldExists('email', userData.email)) {
                throw new ErrorHandler(400, msg.emailAlreadyExists);
            }
            
            const user = new User(userData);

            await user.save();
            return user;
        } catch (error: any) {
            throw new ErrorHandler(500, msg.errorCreatingUser, error.stack);
        }
    }

    public static async getUser(id: string): Promise<(UserInterface & Document) | null> {
        try {
            const user = await User.findById(id).select('-password');

            if (!user) {
                throw new ErrorHandler(404, msg.userNotFound);
            }

            return user;
        } catch (error: any) {
            throw new ErrorHandler(500, msg.errorGettingUser, error.stack);
        }
    }

    public static async updateUser(id: string, userData: Partial<UserInterface>): Promise<(UserInterface & Document) | null> {
        try {
            const currentUser = await User.findById(id);

            if (!currentUser) {
                throw new ErrorHandler(404, msg.userNotFound);
            }

            if (userData.password) {
                const isSamePassword = await HashService.comparePassword(userData.password, currentUser.password);

                if (isSamePassword) {
                    throw new ErrorHandler(400, msg.passwordMustBeDifferentFromYourCurrent);
                }
            }

            if (userData.username && userData.username !== currentUser.username && await this.fieldExists('username', userData.username)) {
                throw new ErrorHandler(400, msg.usernameAlreadyExists);
            }

            if (userData.email && userData.email !== currentUser.email && await this.fieldExists('email', userData.email)) {
                throw new ErrorHandler(400, msg.emailAlreadyExists);
            }
            
            Object.assign(currentUser, userData);
            await currentUser.save();
    
            const user = await User.findById(id).select('-password');
            return user;
        } catch (error: any) {
            throw new ErrorHandler(500, msg.errorUpdatingUser, error.stack);
        }
    }

    public static async deleteUser(id: string): Promise<(UserInterface & Document) | null> {
        try {
            const user = await User.findByIdAndDelete(id);

            if (!user) {
                throw new ErrorHandler(404, msg.userNotFound);
            }

            return user;
        } catch (error: any) {
            throw new ErrorHandler(500, msg.errorDeletingUser, error.stack);
        }
    }

    private static async fieldExists(field: string, value: string): Promise<boolean> {
        const query: Record<string, any> = {};
        query[field] = value;
        
        const user = await User.findOne(query);
        return !!user;
    }
}