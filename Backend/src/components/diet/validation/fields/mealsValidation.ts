import Joi from 'joi';
import messages from '../../../../config/i18n/en/messages';

const msg = messages.src.components.diet.validation.mealsValidation;

export const mealsValidation = Joi.array().items(Joi.string()).required().messages({
    'any.empty': msg.emptyData,
    'array.base': msg.mustBeArray,
    'array.includesOne': msg.mustBeString,
});