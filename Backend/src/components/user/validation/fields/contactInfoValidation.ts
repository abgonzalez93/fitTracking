import Joi from 'joi';
import messages from '../../../../config/i18n/en/messages';

const msg = messages.src.components.user.validation.contactInfoValidation;

export const contactInfoValidation = Joi.object({
    phoneNumberValidation: Joi.string()
        .optional()
        .messages({
            'string.base': `${msg.phoneNumberValidation.invalidData}`, 
        }),
    addressValidation: Joi.string()
        .optional()
        .messages({
            'string.base': `${msg.addressValidation.invalidData}`,
        }),
}).optional();