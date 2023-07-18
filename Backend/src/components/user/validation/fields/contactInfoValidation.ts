import Joi from 'joi';
import messages from '../../../../config/i18n/en';

const msg = messages.src.components.user.validation.contactInfoValidation;

export const contactInfoValidation = Joi.string().optional().messages({
    'string.empty': msg.emptyData,
});