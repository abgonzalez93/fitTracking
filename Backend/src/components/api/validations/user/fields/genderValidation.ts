// External Libraries
import Joi from 'joi'

// Components { Controllers, Models, Routes, Services, Validations }
import { gender } from '@components/user/model/enums'

// Configs and Messages
import { getUserMessages } from '@config/i18n/messages'

const msg = getUserMessages.validation.genderValidation

export const genderValidation = Joi.string().valid(...Object.values(gender)).optional().messages({
    'any.only': msg.mustBeOneOfTheFollowing(Object.values(gender))
})
