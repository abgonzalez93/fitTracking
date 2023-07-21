import Joi from 'joi';
import messages from '../../../../config/i18n/messages/messages';

const msg = messages.src.components.user.validation.surnameValidation;

export const surnameValidation = Joi.string().min(1).max(100).required().messages({
    'string.empty': msg.emptyData,
    'string.min': msg.minLength("1"),
    'string.max': msg.maxLength("100"),
});