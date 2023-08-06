// External Libraries
import Joi from 'joi'

// Components { Controllers, Models, Routes, Services, Validations }
import { micronutrients } from '@api/models/nutritionalValues/micronutrients/micronutrients'

// Messages
import { getNutritionalValuesMessages } from '@i18n/messages'

const validation: Record<string, Joi.NumberSchema> = {}

micronutrients.forEach((micronutrient) => {
    validation[micronutrient] = Joi.number().positive().optional().messages({
        'number.base': getNutritionalValuesMessages.validation.micronutrientsValidation[micronutrient].mustBeNumber,
        'number.positive': getNutritionalValuesMessages.validation.micronutrientsValidation[micronutrient].mustBePositive
    })
})

export const micronutrientsValidation = Joi.object(validation).optional()
