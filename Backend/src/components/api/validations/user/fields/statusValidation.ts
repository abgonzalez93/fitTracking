// External Libraries
import Joi from 'joi'

// Components { Controllers, Models, Routes, Services, Validations }
import { userStatus } from '@api/models/user/enums'

// Configs and Messages
import { getUserMessages } from '@i18n/messages'

const msg = getUserMessages.validation.statusValidation

const values = Object.values(userStatus).filter(value => isNaN(Number(value)))

export const statusValidation = Joi.string().valid(...Object.values(userStatus)).optional().messages({
    'any.only': msg.mustBeOneOfTheFollowing(values)
})
