import Joi from 'joi';
import { gender } from '../../model/enums';
import messages from '../../../../config/i18n/en/messages';

const msg = messages.src.components.user.validation.genderValidation;

export const genderValidation = Joi.string().valid(...Object.values(gender)).optional().messages({
    'any.only': msg.mustBeOneOfTheFollowing(Object.values(gender).join(', ')),
});