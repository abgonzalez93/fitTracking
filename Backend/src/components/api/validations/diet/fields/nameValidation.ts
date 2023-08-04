// External Libraries
import Joi from 'joi'

// Messages
import { getDietMessages } from '@i18n/messages'

const msg = getDietMessages.validation.nameValidation

export const nameValidation = Joi.string().optional().messages({
    'string.base': msg.mustBeString
})
