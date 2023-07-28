// External Libraries
import Joi from 'joi'

// Components { Controllers, Models, Routes, Services, Validations }
import { activityLevel } from '@components/user/model/enums'

// Configs and Messages
import { getUserMessages } from '@config/i18n/messages'

const msg = getUserMessages.validation.activityLevelValidation

export const activityLevelValidation = Joi.string().valid(...Object.values(activityLevel)).optional().messages({
    'any.only': msg.mustBeOneOfTheFollowing(Object.values(activityLevel))
})
