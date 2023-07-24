import Joi from 'joi';
import { ErrorHandler } from '@middlewares/errorHandler';
import { activityLevelValidation, birthDateValidation, clientsValidation, contactInfoValidation, emailValidation, foodPreferencesValidation, genderValidation, healthConditionsValidation, heightValidation, nameValidation, passwordValidation, profileImageValidation, statusValidation, surnameValidation, userTypeValidation, usernameValidation, weightValidation  } from './fields'
import { nutritionalGoalsValidation } from '@components/nutricionalGoals/validation/nutritionalGoalValidation';
import { getUserMessages } from '@config/i18n/messages'
import httpStatus from '@constants/httpStatus';

const userValidation = Joi.object({
    username: usernameValidation,
    name: nameValidation,
    surname: surnameValidation,
    email: emailValidation,
    password: passwordValidation,
    userType: userTypeValidation,
    clients: clientsValidation,
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
    nutritionalGoals: nutritionalGoalsValidation
});

export const validateUser = (userData: any) => {
    const validationResult = userValidation.validate(userData, { abortEarly: false });

    if (validationResult.error) {
        throw new ErrorHandler(httpStatus.BAD_REQUEST, getUserMessages.validation.invalidUserData(validationResult.error.details[0].message));
    }

    return userData;
};