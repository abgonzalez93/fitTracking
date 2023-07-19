import Joi from 'joi';
import messages from '../../../../config/i18n/en';

const msg = messages.src.components.nutritionalGoals.validation.micronutrientsValidation;

export const micronutrientsValidation = Joi.object({
    vitaminA: Joi.number().positive().optional(),
    vitaminB1: Joi.number().positive().optional(),
    vitaminB2: Joi.number().positive().optional(),
    vitaminB3: Joi.number().positive().optional(),
    vitaminB5: Joi.number().positive().optional(),
    vitaminB6: Joi.number().positive().optional(),
    vitaminB7: Joi.number().positive().optional(),
    vitaminB9: Joi.number().positive().optional(),
    vitaminB12: Joi.number().positive().optional(),
    vitaminC: Joi.number().positive().optional(),
    vitaminD: Joi.number().positive().optional(),
    vitaminE: Joi.number().positive().optional(),
    vitaminK: Joi.number().positive().optional(),
    calcium: Joi.number().positive().optional(),
    iron: Joi.number().positive().optional(),
    magnesium: Joi.number().positive().optional(),
    potassium: Joi.number().positive().optional(),
    selenium: Joi.number().positive().optional(),
    sodium: Joi.number().positive().optional(),
    zinc: Joi.number().positive().optional(),
    iodine: Joi.number().positive().optional(),
    copper: Joi.number().positive().optional(),
    chromium: Joi.number().positive().optional(),
    manganese: Joi.number().positive().optional(),
    molybdenum: Joi.number().positive().optional(),
    chloride: Joi.number().positive().optional(),
}).optional().messages({
    'number.base': msg.mustBeNumber,
    'number.positive': msg.mustBePositive,
});