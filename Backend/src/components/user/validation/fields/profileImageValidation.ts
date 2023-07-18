import Joi from 'joi';
import messages from '../../../../config/i18n/en';

const msg = messages.src.components.user.validation.profileImageValidation;

export const profileImageValidation = Joi.string().optional().messages({
    'string.empty': msg.emptyData,
});