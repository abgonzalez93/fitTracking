// External Libraries
import Joi from 'joi'

// Configs and Messages
import { getUserMessages } from '@i18n/messages'

const msg = getUserMessages.validation.emailValidation

export const emailValidation = Joi.string().email().required().messages({
    'string.empty': msg.emptyData,
    'string.email': msg.invalidData
})
