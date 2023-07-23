import Joi from 'joi';
import { getUserMessages } from '../../../../config/i18n/messages/components/userMessages';

const msg = getUserMessages.validation.surnameValidation;

export const surnameValidation = Joi.string().min(1).max(100).required().messages({
    'string.empty': msg.emptyData,
    'string.min': msg.minLength("1"),
    'string.max': msg.maxLength("100"),
});