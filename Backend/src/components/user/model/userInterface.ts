import { Document } from 'mongoose';
import { activityLevel, foodPreferences, gender, healthConditions, userStatus, userType } from './enums'

type ActivityLevel = typeof activityLevel[keyof typeof activityLevel];
type FoodPreferences = typeof foodPreferences[keyof typeof foodPreferences];
type Gender = typeof gender[keyof typeof gender];
type HealthConditions = typeof healthConditions[keyof typeof healthConditions];
type UserStatus = typeof userStatus[keyof typeof userStatus];
type UserType = typeof userType[keyof typeof userType];

export interface UserInterface extends Document {
    name: string;
    surname: string;
    username: string;
    email: string;
    password: string;
    userType: UserType;
    status: UserStatus;
    profileImage: string;
    contactInfo: string;
    gender: Gender;
    birthDate: Date;
    weight: number;
    height: number;
    healthConditions: HealthConditions[];
    foodPreferences: FoodPreferences[];
    activityLevel: ActivityLevel;
    sessionToken: string;
    creationDate: Date;
    updatedDate: Date;
}