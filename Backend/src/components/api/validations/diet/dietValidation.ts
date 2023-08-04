// External Libraries
import Joi from 'joi'

// Constants
import httpStatus from '@constants/httpStatus'

// Middlewares
import { ErrorHandler } from '@middlewares/errorHandler'

// Components { Controllers, Models, Routes, Services, Validations }
import { type DietInterface } from '@api/models/diet/dietInterface'

// Messages
import { getDietMessages } from '@i18n/messages'

// Local files
import { nameValidation, descriptionValidation, userValidation, mealsValidation } from './fields'

const dietValidation = Joi.object({
    user: userValidation,
    name: nameValidation,
    description: descriptionValidation,
    meals: mealsValidation
})

export const validateDiet = (dietData: DietInterface): DietInterface => {
    const validationResult = dietValidation.validate(dietData, { abortEarly: false })

    if (validationResult.error != null) {
        throw new ErrorHandler(httpStatus.BAD_REQUEST, getDietMessages.validation.invalidDietData(validationResult.error.details[0].message))
    }

    return dietData
}
