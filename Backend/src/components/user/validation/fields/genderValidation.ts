import Joi from 'joi';
import { gender } from '../../model/enums';
import { getUserMessages } from '../../../../config/i18n/messages/components/userMessages';

const msg = getUserMessages.validation.genderValidation;

export const genderValidation = Joi.string().valid(...Object.values(gender)).optional().messages({
    'any.only': msg.mustBeOneOfTheFollowing(Object.values(gender)),
});