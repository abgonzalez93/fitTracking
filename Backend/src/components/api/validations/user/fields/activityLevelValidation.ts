// External Libraries
import Joi from 'joi'

// Components { Controllers, Models, Routes, Services, Validations }
import { activityLevel } from '@api/models/user/enums'

// Configs and Messages
import { getUserMessages } from '@i18n/messages'

const msg = getUserMessages.validation.activityLevelValidation

export const activityLevelValidation = Joi.string().valid(...Object.values(activityLevel)).optional().messages({
    'any.only': msg.mustBeOneOfTheFollowing(Object.values(activityLevel))
})
