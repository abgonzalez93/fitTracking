// External Libraries
import Joi from 'joi'

// Configs and Messages
import { getUserMessages } from '@i18n/messages'

const msg = getUserMessages.validation.usernameValidation

export const usernameValidation = Joi.string().min(1).max(100).required().messages({
    'string.empty': msg.emptyData,
    'string.min': msg.minLength('1'),
    'string.max': msg.maxLength('100')
})
