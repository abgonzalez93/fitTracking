// External Libraries
import Joi from 'joi'

// Configs and Messages
import { getDietMessages } from '@config/i18n/messages'

const msg = getDietMessages.validation.mealsValidation

export const mealsValidation = Joi.object({
    breakfast: Joi.array().items(Joi.string()).optional(),
    lunch: Joi.array().items(Joi.string()).optional(),
    dinner: Joi.array().items(Joi.string()).optional(),
    snacks: Joi.array().items(Joi.string()).optional(),
}).optional().messages({
    'object.base': msg.mustBeObject,
    'array.base': msg.mustBeArray,
    'array.includesOne': msg.mustBeString
})