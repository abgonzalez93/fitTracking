import Joi from 'joi'
import { activityLevel } from '@components/user/model/enums'
import { getUserMessages } from '@config/i18n/messages'

const msg = getUserMessages.validation.activityLevelValidation

export const activityLevelValidation = Joi.string().valid(...Object.values(activityLevel)).optional().messages({
    'any.only': msg.mustBeOneOfTheFollowing(Object.values(activityLevel))
})
