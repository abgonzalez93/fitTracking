// External Libraries
import Joi from 'joi'

// Configs and Messages
import { getDietMessages } from '@config/i18n/messages'

const msg = getDietMessages.validation.nameValidation

export const nameValidation = Joi.string().optional().messages({
    'string.base': msg.mustBeString
})
