import Joi from 'joi';
import { foodPreferences } from '../../model/enums'
import messages from '../../../../config/i18n/messages/messages';

const msg = messages.src.components.user.validation.foodPreferencesValidation;

export const foodPreferencesValidation = Joi.array().items(Joi.string().valid(...Object.values(foodPreferences))).optional().messages({
    'array.base': msg.mustBeArray,
    'any.only': msg.mustBeOneOfTheFollowing(Object.values(foodPreferences).join(', ')),
});