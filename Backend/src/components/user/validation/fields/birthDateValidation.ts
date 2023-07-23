import Joi from 'joi';
import { getUserMessages } from '../../../../config/i18n/messages/components/userMessages';

const msg = getUserMessages.validation.birthDateValidation;

export const birthDateValidation = Joi.date().optional().messages({
    'date.base': msg.invalidData,
});