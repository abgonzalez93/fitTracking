import Joi from 'joi';
import { getUserMessages } from '../../../../config/i18n/messages/components/userMessages';

const msg = getUserMessages.validation.emailValidation;

export const emailValidation = Joi.string().email().required().messages({
    'string.empty': msg.emptyData,
    'string.email': msg.invalidData,
});