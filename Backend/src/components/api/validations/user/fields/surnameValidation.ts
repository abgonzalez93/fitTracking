// External Libraries
import Joi from 'joi'

// Messages
import { getUserMessages } from '@i18n/messages'

const msg = getUserMessages.validation.surnameValidation

export const surnameValidation = Joi.string().min(1).max(100).required().messages({
    'string.empty': msg.emptyData,
    'string.min': msg.minLength('1'),
    'string.max': msg.maxLength('100')
})
