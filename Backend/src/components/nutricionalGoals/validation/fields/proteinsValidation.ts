import Joi from 'joi'
import { getNutritionalGoalsMessages } from '@config/i18n/messages'

const msg = getNutritionalGoalsMessages.validation.proteinsValidation

export const proteinsValidation = Joi.number().positive().optional().messages({
    'number.base': msg.mustBeNumber,
    'number.positive': msg.mustBePositive
})
