// External Libraries
import Joi from 'joi'

// Messages
import { getNutritionalValuesMessages } from '@i18n/messages'

const msg = getNutritionalValuesMessages.validation.fatsValidation

export const fatsValidation = Joi.number().positive().optional().messages({
    'number.base': msg.mustBeNumber,
    'number.positive': msg.mustBePositive
})
