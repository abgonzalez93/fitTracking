// External Libraries
import Joi from 'joi'

// Components { Controllers, Models, Routes, Services, Validations }
import { foodPreferences } from '@api/models/user/enums'

// Messages
import { getUserMessages } from '@i18n/messages'

const msg = getUserMessages.validation.foodPreferencesValidation

export const foodPreferencesValidation = Joi.array().items(Joi.string().valid(...Object.values(foodPreferences))).optional().messages({
    'array.base': msg.mustBeArray,
    'any.only': msg.mustBeOneOfTheFollowing(Object.values(foodPreferences))
})
