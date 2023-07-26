import Joi from 'joi'
import { healthConditions } from '@components/user/model/enums'
import { getUserMessages } from '@config/i18n/messages'

const msg = getUserMessages.validation.healthConditionsValidation

export const healthConditionsValidation = Joi.array().items(Joi.string().valid(...Object.values(healthConditions))).optional().messages({
    'array.base': msg.mustBeArray,
    'any.only': msg.mustBeOneOfTheFollowing(Object.values(healthConditions))
})
