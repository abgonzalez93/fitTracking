import Joi from 'joi';
import { getDietMessages } from '../../../../config/i18n/messages/components/dietMessages';

const msg = getDietMessages.validation.userValidation;

export const userValidation = Joi.string().required().messages({
    'string.empty': msg.emptyData,
    'string.base': msg.mustBeString,
});