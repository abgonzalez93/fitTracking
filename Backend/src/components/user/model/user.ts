import mongoose, { Schema, Types } from 'mongoose'
import HashService from '@utils/hashService'
import { type UserInterface } from './userInterface'
import { activityLevel, foodPreferences, gender, healthConditions, userStatus, userType } from './enums'
import { ErrorHandler } from '@middlewares/errorHandler'
import { getUserMessages } from '@config/i18n/messages'
import httpStatus from '@constants/httpStatus'

const user: Schema = new Schema({
    name: { type: String, required: true },
    surname: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    userType: { type: String, enum: Object.values(userType), required: true },
    clients: { type: [{ type: Types.ObjectId, ref: 'User' }], required: false },
    status: { type: String, enum: Object.values(userStatus), required: true, default: userStatus.Active },
    profileImage: { type: String, required: false },
    contactInfo: {
        phoneNumber: { type: String, required: false },
        address: { type: String, required: false }
    },
    gender: { type: String, enum: Object.values(gender), required: false },
    birthDate: { type: Date, required: false },
    weight: { type: Number, required: false },
    height: { type: Number, required: false },
    healthConditions: { type: [String], enum: Object.values(healthConditions), required: false },
    foodPreferences: { type: [String], enum: Object.values(foodPreferences), required: false },
    activityLevel: { type: String, enum: Object.values(activityLevel), required: false },
    nutritionalGoals: { type: Types.ObjectId, ref: 'NutritionalGoals', required: false }
}, { timestamps: true })

user.pre<UserInterface>('save', async function (next) {
    if (this.isModified('password')) {
        this.password = await HashService.hashPassword(this.password)
    }

    if (this.isModified('clients') && this.userType !== userType.Advanced) {
        throw new ErrorHandler(httpStatus.BAD_REQUEST, getUserMessages.validation.clientsValidation.mustBeAdvanced)
    }

    next()
})

export default mongoose.model<UserInterface>('User', user)
