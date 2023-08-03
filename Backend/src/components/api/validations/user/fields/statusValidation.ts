// External Libraries
import Joi from 'joi'

// Components { Controllers, Models, Routes, Services, Validations }
import { userStatus } from '@components/user/model/enums'

// Configs and Messages
import { getUserMessages } from '@config/i18n/messages'

const msg = getUserMessages.validation.statusValidation

const values = Object.values(userStatus).filter(value => isNaN(Number(value)))

export const statusValidation = Joi.string().valid(...Object.values(userStatus)).optional().messages({
    'any.only': msg.mustBeOneOfTheFollowing(values)
})
