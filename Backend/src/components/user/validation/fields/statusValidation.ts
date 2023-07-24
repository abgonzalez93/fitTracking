import Joi from 'joi';
import { userStatus } from '@components/user/model/enums';
import { getUserMessages } from '@config/i18n/messages'

const msg = getUserMessages.validation.statusValidation;

const values = Object.values(userStatus).filter(value => isNaN(Number(value)));

export const statusValidation = Joi.string().valid(...Object.values(userStatus)).optional().messages({
    'string.empty': msg.emptyData,
    'any.only': msg.mustBeOneOfTheFollowing(values)
});