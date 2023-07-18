import Joi from 'joi';
import { ErrorHandler } from '../../../middlewares/errorHandler';
import { activityLevelValidation, birthDateValidation, clientsValidation, phoneNumberValidation, addressValidation, emailValidation, foodPreferencesValidation, genderValidation, healthConditionsValidation, heightValidation, nameValidation, passwordValidation, profileImageValidation, statusValidation, surnameValidation, userTypeValidation, usernameValidation, weightValidation  } from './fields'
import messages from '../../../config/i18n/en';

const userSchema = Joi.object({
    username: usernameValidation,
    name: nameValidation,
    surname: surnameValidation,
    email: emailValidation,
    password: passwordValidation,
    userType: userTypeValidation,
    clients: clientsValidation,
    status: statusValidation,
    profileImage: profileImageValidation,
    contactInfo: Joi.object({
        phoneNumber: phoneNumberValidation,
        address: addressValidation
    }),
    gender: genderValidation,
    birthDate: birthDateValidation,
    weight: weightValidation,
    height: heightValidation,
    healthConditions: healthConditionsValidation,
    foodPreferences: foodPreferencesValidation,
    activityLevel: activityLevelValidation,
});

export const validateUser = (userData: any) => {
    const validationResult = userSchema.validate(userData, { abortEarly: false });

    if (validationResult.error) {
        throw new ErrorHandler(400, messages.src.components.user.validation.invalidUserData(validationResult.error.details[0].message));
    }

    return userData;
};