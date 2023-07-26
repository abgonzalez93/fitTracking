import Joi from 'joi'
import { getDietMessages } from '@config/i18n/messages'

const msg = getDietMessages.validation.nameValidation

export const nameValidation = Joi.string().required().messages({
    'string.empty': msg.emptyData,
    'string.base': msg.mustBeString
})
