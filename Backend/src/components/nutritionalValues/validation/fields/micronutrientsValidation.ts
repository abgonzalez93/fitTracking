// External Libraries
import Joi from 'joi'

// Configs and Messages
import { getNutritionalValuesMessages } from '@config/i18n/messages'

// Local files
import { micronutrients } from './micronutrients/micronutrients'

const validation: Record<string, any> = {}

micronutrients.forEach((micronutrient) => {
    validation[micronutrient] = Joi.number().positive().optional().messages({
        'number.base': getNutritionalValuesMessages.validation.micronutrientsValidation[micronutrient].mustBeNumber,
        'number.positive': getNutritionalValuesMessages.validation.micronutrientsValidation[micronutrient].mustBePositive
    })
})

export const micronutrientsValidation = Joi.object(validation).optional()
