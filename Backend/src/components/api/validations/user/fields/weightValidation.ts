// External Libraries
import Joi from 'joi'

// Configs and Messages
import { getUserMessages } from '@i18n/messages'

const msg = getUserMessages.validation.weightValidation

export const weightValidation = Joi.number().positive().optional().messages({
    'number.base': msg.invalidData,
    'number.positive': msg.mustBePositive
})
