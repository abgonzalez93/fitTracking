import Joi from 'joi';
import messages from '../../../../config/i18n/en/messages';

const msg = messages.src.components.user.validation.birthDateValidation;

export const birthDateValidation = Joi.date().optional().messages({
    'date.base': msg.invalidData,
});