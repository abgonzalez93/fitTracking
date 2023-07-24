import Joi from 'joi';
import { getUserMessages } from '@config/i18n/messages'

const msg = getUserMessages.validation.weightValidation;

export const weightValidation = Joi.number().positive().optional().messages({
    'number.base': msg.invalidData,
    'number.positive': msg.mustBePositive,
});