import Joi from 'joi';
import messages from '../../../../config/i18n/messages/messages';

const msg = messages.src.components.user.validation.heightValidation;

export const heightValidation = Joi.number().positive().optional().messages({
    'number.base': msg.invalidData,
    'number.positive': msg.mustBePositive,
});