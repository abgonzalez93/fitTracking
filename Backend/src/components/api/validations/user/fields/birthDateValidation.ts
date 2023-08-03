// External Libraries
import Joi from 'joi'

// Configs and Messages
import { getUserMessages } from '@i18n/messages'

const msg = getUserMessages.validation.birthDateValidation

export const birthDateValidation = Joi.date().optional().messages({
    'date.base': msg.invalidData
})
