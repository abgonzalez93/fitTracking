// External Libraries
import Joi from 'joi'

// Constants
import httpStatus from '@constants/httpStatus'

// Middlewares
import { ErrorHandler } from '@middlewares/errorHandler'

// Components { Controllers, Models, Routes, Services, Validations }
import { type UserInterface } from '@components/user/model/userInterface'
import { nutritionalGoalsValidation } from '@components/nutricionalGoals/validation/nutritionalGoalValidation'

// Configs and Messages
import { getUserMessages } from '@config/i18n/messages'

// Local files
import { activityLevelValidation, birthDateValidation, clientsValidation, contactInfoValidation, emailValidation, foodPreferencesValidation, genderValidation, healthConditionsValidation, heightValidation, nameValidation, passwordValidation, profileImageValidation, statusValidation, surnameValidation, userTypeValidation, usernameValidation, weightValidation } from './fields'

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
})

export const validateUser = (userData: UserInterface): UserInterface => {
    const validationResult = userValidation.validate(userData, { abortEarly: false })

    if (validationResult.error != null) {
        throw new ErrorHandler(httpStatus.BAD_REQUEST, getUserMessages.validation.invalidUserData(validationResult.error.details[0].message))
    }

    return userData
}
