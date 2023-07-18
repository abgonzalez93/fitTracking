import { Document } from 'mongoose';
import { activityLevel, foodPreferences, gender, healthConditions, userStatus, userType } from './enums'

type ActivityLevel = typeof activityLevel[keyof typeof activityLevel];
type FoodPreferences = typeof foodPreferences[keyof typeof foodPreferences];
type Gender = typeof gender[keyof typeof gender];
type HealthConditions = typeof healthConditions[keyof typeof healthConditions];
type UserStatus = typeof userStatus[keyof typeof userStatus];
type UserType = typeof userType[keyof typeof userType];

export interface ContactInfoInterface {
    phoneNumber: string;
    address: string;
}

interface UserPersonalInfo {
    name: string;
    surname: string;
    username: string;
    password: string;
    email: string;
    gender: Gender;
    birthDate: Date;
    contactInfo: ContactInfoInterface;
}

interface UserPhysicalInfo {
    weight: number;
    height: number;
    healthConditions: HealthConditions[];
    foodPreferences: FoodPreferences[];
    activityLevel: ActivityLevel;
}

interface UserSystemInfo extends Document {
    userType: UserType;
    clients: string[];
    status: UserStatus;
    profileImage: string; 
    creationDate: Date;
    updatedDate: Date;
}

export type UserInterface = UserPersonalInfo & UserPhysicalInfo & UserSystemInfo;