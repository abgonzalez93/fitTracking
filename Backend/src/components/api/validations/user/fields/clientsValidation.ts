// External Libraries
import Joi from 'joi'

// Components { Controllers, Models, Routes, Services, Validations }
import { userType } from '@api/models/user/enums'

// Messages
import { getUserMessages } from '@i18n/messages'

const msg = getUserMessages.validation.clientsValidation

export const clientsValidation = Joi.array().items(Joi.string().regex(/^[0-9a-fA-F]{24}$/))
    .when('userType', {
        is: userType.Advanced,
        then: Joi.optional(),
        otherwise: Joi.forbidden()
    }).messages({
        'array.base': msg.mustBeArray,
        'string.pattern.base': msg.invalidData,
        'any.only': msg.mustBeAdvanced
    })
