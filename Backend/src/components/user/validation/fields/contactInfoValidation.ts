import Joi from 'joi';
import messages from '../../../../config/i18n/en';

const msg = messages.src.components.user.validation.contactInfoValidation;

export const contactInfoValidation = Joi.object({
    phoneNumberValidation: Joi.string().optional(),
    addressValidation: Joi.string().optional(),
}).optional().messages({
    'string.empty': msg.emptyData,
    'string.invalid': msg.invalidData,
});