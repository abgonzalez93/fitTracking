import Joi from 'joi';
import messages from '../../../../config/i18n/en';

const msg = messages.src.components.nutritionalGoals.validation.caloriesPerMealValidation;

export const caloriesPerMealValidation = Joi.object({
    breakfast: Joi.number().positive().optional(),
    lunch: Joi.number().positive().optional(),
    dinner: Joi.number().positive().optional(),
    snack: Joi.number().positive().optional(),
}).optional().messages({
    'number.base': msg.mustBeNumber,
    'number.positive': msg.mustBePositive,
});