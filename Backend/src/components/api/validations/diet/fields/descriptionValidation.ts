// External Libraries
import Joi from 'joi'

// Messages
import { getDietMessages } from '@i18n/messages'

const msg = getDietMessages.validation.descriptionValidation

export const descriptionValidation = Joi.string().optional().messages({
    'string.base': msg.mustBeString
})
