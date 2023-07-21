import Joi from 'joi';
import messages from '../../../../config/i18n/messages/messages';

const msg = messages.src.components.nutritionalGoals.validation.caloriesValidation;

export const caloriesValidation = Joi.number().positive().optional().messages({
    'number.base': msg.mustBeNumber,
    'number.positive': msg.mustBePositive,
});