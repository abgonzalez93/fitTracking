import Joi from 'joi';
import messages from '../../../../config/i18n/messages/messages';

const msg = messages.src.components.diet.validation.descriptionValidation;

export const descriptionValidation = Joi.string().optional().messages({
    'string.base': msg.mustBeString,
});