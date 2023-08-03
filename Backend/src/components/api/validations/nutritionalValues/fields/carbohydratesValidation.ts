// External Libraries
import Joi from 'joi'

// Configs and Messages
import { getNutritionalValuesMessages } from '@i18n/messages'

const msg = getNutritionalValuesMessages.validation.carbohydratesValidation

export const carbohydratesValidation = Joi.number().positive().optional().messages({
    'number.base': msg.mustBeNumber,
    'number.positive': msg.mustBePositive
})
