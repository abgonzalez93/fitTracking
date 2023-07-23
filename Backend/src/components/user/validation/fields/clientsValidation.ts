import Joi from 'joi';
import { userType } from '../../model/enums';
import { getUserMessages } from '../../../../config/i18n/messages/components/userMessages';

const msg = getUserMessages.validation.clientsValidation;

export const clientsValidation = Joi.array().items(Joi.string().regex(/^[0-9a-fA-F]{24}$/))
.when('userType', {
    is: userType.Advanced,
    then: Joi.optional(),
    otherwise: Joi.forbidden()
}).messages({
    'array.base': msg.mustBeArray,
    'string.pattern.base': msg.invalidData,
    'any.only': msg.mustBeAdvanced
});