import Joi from 'joi';
import { healthConditions } from '../../model/enums'
import messages from '../../../../config/i18n/messages/messages';

const msg = messages.src.components.user.validation.healthConditionsValidation;

export const healthConditionsValidation = Joi.array().items(Joi.string().valid(...Object.values(healthConditions))).optional().messages({
    'array.base': msg.mustBeArray,
    'any.only': msg.mustBeOneOfTheFollowing(Object.values(healthConditions).join(', ')),
});