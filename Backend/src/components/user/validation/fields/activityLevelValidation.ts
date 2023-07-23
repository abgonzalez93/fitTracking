import Joi from 'joi';
import { activityLevel } from '../../model/enums'
import { getUserMessages } from '../../../../config/i18n/messages/components/userMessages';

const msg = getUserMessages.validation.activityLevelValidation;

export const activityLevelValidation = Joi.string().valid(...Object.values(activityLevel)).optional().messages({
    'any.only': msg.mustBeOneOfTheFollowing(Object.values(activityLevel)),
});