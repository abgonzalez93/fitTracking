import Joi from 'joi';
import messages from '../../../../config/i18n/en';

const msg = messages.src.components.user.validation.emailValidation;

export const emailValidation = Joi.string().email().required().messages({
    'string.empty': msg.emptyData,
    'string.email': msg.invalidData,
});