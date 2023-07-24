import Joi from 'joi';
import { getDietMessages } from '@config/i18n/messages'

const msg = getDietMessages.validation.mealsValidation;

export const mealsValidation = Joi.array().items(Joi.string()).required().messages({
    'any.empty': msg.emptyData,
    'array.base': msg.mustBeArray,
    'array.includesOne': msg.mustBeString,
});