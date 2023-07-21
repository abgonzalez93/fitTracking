import Joi from 'joi';
import { userType } from '../../model/enums';
import messages from '../../../../config/i18n/en/messages';

const msg = messages.src.components.user.validation.userTypeValidation;

export const userTypeValidation = Joi.string().valid(...Object.values(userType)).required().messages({
    'string.empty': msg.emptyData,
    'any.only': msg.mustBeOneOfTheFollowing(Object.values(userType).join(', ')),
});