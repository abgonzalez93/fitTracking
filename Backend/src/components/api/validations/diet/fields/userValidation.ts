// External Libraries
import Joi from 'joi'

// Configs and Messages
import { getDietMessages } from '@i18n/messages'

const msg = getDietMessages.validation.userValidation

export const userValidation = Joi.string().required().messages({
    'string.empty': msg.emptyData,
    'string.base': msg.mustBeString
})
