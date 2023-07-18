import Joi from 'joi';
import { userStatus } from '../../model/enums';
import messages from '../../../../config/i18n/en';

const msg = messages.src.components.user.validation.statusValidation;

const values = Object.values(userStatus).filter(value => isNaN(Number(value))).join(', ');

export const statusValidation = Joi.string().valid(...Object.values(userStatus)).optional().messages({
    'string.empty': msg.emptyData,
    'any.only': msg.mustBeOneOfTheFollowing(values)
});