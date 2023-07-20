import Joi from 'joi';
import { activityLevel } from '../../model/enums'
import messages from '../../../../config/i18n/en';

const msg = messages.src.components.user.validation.activityLevelValidation;

export const activityLevelValidation = Joi.string().valid(...Object.values(activityLevel)).optional().messages({
    'any.only': msg.mustBeOneOfTheFollowing(Object.values(activityLevel).join(', ')),
});