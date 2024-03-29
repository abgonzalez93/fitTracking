// External Libraries
import Joi from 'joi'

// Messages
import { getUserMessages } from '@i18n/messages'

const msg = getUserMessages.validation.passwordValidation

export const passwordValidation = Joi.string().min(8).max(100)
    .pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9].*[0-9])(?=.*[^a-zA-Z0-9])(?!.*[\s]).*$/)
    .required().messages({
        'string.empty': msg.emptyData,
        'string.min': msg.minLength('8'),
        'string.max': msg.maxLength('100'),
        'string.pattern.base': msg.mustContain
    })
