import Joi from 'joi';
import messages from '../../../../config/i18n/en/messages';

const msg = messages.src.components.diet.validation.nameValidation;

export const nameValidation = Joi.string().required().messages({
    'string.empty': msg.emptyData,
    'string.base': msg.mustBeString,
});