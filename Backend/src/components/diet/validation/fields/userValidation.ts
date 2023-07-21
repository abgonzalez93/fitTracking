import Joi from 'joi';
import messages from '../../../../config/i18n/en/messages';

const msg = messages.src.components.diet.validation.userValidation;

export const userValidation = Joi.string().required().messages({
    'string.empty': msg.emptyData,
    'string.base': msg.mustBeString,
});