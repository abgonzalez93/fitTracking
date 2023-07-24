import Joi from 'joi';
import { getUserMessages } from '@config/i18n/messages'

const msg = getUserMessages.validation.contactInfoValidation;

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