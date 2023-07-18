import mongoose, { Schema } from 'mongoose';
import HashService from '../../../utils/hashService';
import { UserInterface } from './userInterface';
import { activityLevel, foodPreferences, gender, healthConditions, userStatus, userType } from './enums'
  
const userSchema: Schema = new Schema({
    name: { type: String, required: true },
    surname: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    userType: { type: String, enum: Object.values(userType), required: true },
    status: { type: String, enum: Object.values(userStatus), required: true, default: userStatus.Active },
    profileImage: { type: String, required: false },
    contactInfo: { type: String, required: false },
    gender: { type: String, enum: Object.values(gender), required: false },
    birthDate: { type: Date, required: false },
    weight: { type: Number, required: false },
    height: { type: Number, required: false },
    healthConditions: { type: [String], enum: Object.values(healthConditions), required: false },
    foodPreferences: { type: [String], enum: Object.values(foodPreferences), required: false },
    activityLevel: { type: String, enum: Object.values(activityLevel), required: false },
    sessionToken: { type: String, required: false }
}, { timestamps: true });

userSchema.pre<UserInterface>('save', async function(next) {
    if (this.isModified('password')) {
        this.password = await HashService.hashPassword(this.password);
    }

    next();
});

export default mongoose.model<UserInterface>('User', userSchema);