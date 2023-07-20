import Joi from 'joi';
import messages from '../../../../config/i18n/en';

const msg = messages.src.components.user.validation.nameValidation;

export const nameValidation = Joi.string().min(1).max(100).required().messages({
    'string.empty': msg.emptyData,
    'string.min': msg.minLength,
    'string.max': msg.maxLength,
});