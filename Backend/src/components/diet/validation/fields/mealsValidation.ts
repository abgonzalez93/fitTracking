// External Libraries
import Joi from 'joi'

// Configs and Messages
import { getDietMessages } from '@config/i18n/messages'

const msg = getDietMessages.validation.mealsValidation

export const mealsValidation = Joi.array().items(Joi.string()).optional().messages({
    'array.base': msg.mustBeArray,
    'array.includesOne': msg.mustBeString
})
