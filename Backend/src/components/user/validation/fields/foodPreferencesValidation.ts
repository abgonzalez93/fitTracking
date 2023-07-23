import Joi from 'joi';
import { foodPreferences } from '../../model/enums'
import { getUserMessages } from '../../../../config/i18n/messages/components/userMessages';

const msg =getUserMessages.validation.foodPreferencesValidation;

export const foodPreferencesValidation = Joi.array().items(Joi.string().valid(...Object.values(foodPreferences))).optional().messages({
    'array.base': msg.mustBeArray,
    'any.only': msg.mustBeOneOfTheFollowing(Object.values(foodPreferences)),
});