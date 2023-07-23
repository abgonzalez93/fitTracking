import Joi from 'joi';
import { userType } from '../../model/enums';
import { getUserMessages } from '../../../../config/i18n/messages/components/userMessages';

const msg = getUserMessages.validation.userTypeValidation;

export const userTypeValidation = Joi.string().valid(...Object.values(userType)).required().messages({
    'string.empty': msg.emptyData,
    'any.only': msg.mustBeOneOfTheFollowing(Object.values(userType)),
});