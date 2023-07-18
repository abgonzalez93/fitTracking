import Joi from 'joi';
import { ErrorHandler } from '../../../middlewares/errorHandler';
import { activityLevelValidation, birthDateValidation, contactInfoValidation, emailValidation, foodPreferencesValidation, genderValidation, healthConditionsValidation, heightValidation, nameValidation, passwordValidation, profileImageValidation, sessionTokenValidation, statusValidation, surnameValidation, userTypeValidation, usernameValidation, weightValidation  } from './fields'
import messages from '../../../config/i18n/en';

const userSchema = Joi.object({
    username: usernameValidation,
    name: nameValidation,
    surname: surnameValidation,
    email: emailValidation,
    password: passwordValidation,
    userType: userTypeValidation,
    status: statusValidation,
    profileImage: profileImageValidation,
    contactInfo: contactInfoValidation,
    gender: genderValidation,
    birthDate: birthDateValidation,
    weight: weightValidation,
    height: heightValidation,
    healthConditions: healthConditionsValidation,
    foodPreferences: foodPreferencesValidation,
    activityLevel: activityLevelValidation,
    sessionToken: sessionTokenValidation
});

export const validateUser = (userData: any) => {
    const validationResult = userSchema.validate(userData, { abortEarly: false });

    if (validationResult.error) {
        const error = new Error(validationResult.error.details[0].message);
        throw new ErrorHandler(400, messages.src.components.user.validation.invalidUserData(error));
    }

    return userData;
};