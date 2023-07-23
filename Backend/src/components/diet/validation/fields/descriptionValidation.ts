import Joi from 'joi';
import { getDietMessages } from '../../../../config/i18n/messages/components/dietMessages';

const msg = getDietMessages.validation.descriptionValidation;

export const descriptionValidation = Joi.string().optional().messages({
    'string.base': msg.mustBeString,
});