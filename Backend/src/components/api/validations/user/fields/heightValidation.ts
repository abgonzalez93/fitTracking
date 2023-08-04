// External Libraries
import Joi from 'joi'

// Messages
import { getUserMessages } from '@i18n/messages'

const msg = getUserMessages.validation.heightValidation

export const heightValidation = Joi.number().positive().optional().messages({
    'number.base': msg.invalidData,
    'number.positive': msg.mustBePositive
})
