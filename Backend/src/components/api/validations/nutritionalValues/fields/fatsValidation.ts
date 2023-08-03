// External Libraries
import Joi from 'joi'

// Configs and Messages
import { getNutritionalValuesMessages } from '@config/i18n/messages'

const msg = getNutritionalValuesMessages.validation.fatsValidation

export const fatsValidation = Joi.number().positive().optional().messages({
    'number.base': msg.mustBeNumber,
    'number.positive': msg.mustBePositive
})