// External Libraries
import Joi from 'joi'

// Components { Controllers, Models, Routes, Services, Validations }
import { userType } from '@api/models/user/enums'

// Configs and Messages
import { getUserMessages } from '@i18n/messages'

const msg = getUserMessages.validation.userTypeValidation

export const userTypeValidation = Joi.string().valid(...Object.values(userType)).optional().messages({
    'any.only': msg.mustBeOneOfTheFollowing(Object.values(userType))
})
