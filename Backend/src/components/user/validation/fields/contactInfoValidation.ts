import Joi from 'joi';
import messages from '../../../../config/i18n/en';

const msg = messages.src.components.user.validation.contactInfoValidation;

export const phoneNumberValidation = Joi.string().optional().messages({
    'phoneNumber.empty': msg.phoneNumberValidation.emptyData,
    'phoneNumber.invalid': msg.phoneNumberValidation.invalidData,
});

export const addressValidation = Joi.string().optional().messages({
    'address.empty': msg.addressValidation.emptyData,
    'address.invalid': msg.addressValidation.invalidData,
});
