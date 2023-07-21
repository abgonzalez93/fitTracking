import Joi from 'joi';
import messages from '../../../../config/i18n/en/messages';
import { micronutrients } from './micronutrients/micronutrients';

let validation: { [key: string]: any; } = {};

micronutrients.forEach((micronutrient) => {
    validation[micronutrient] = Joi.number().positive().optional().messages({
        'number.base': messages.src.components.nutritionalGoals.validation.micronutrientsValidation[micronutrient].mustBeNumber,
        'number.positive': messages.src.components.nutritionalGoals.validation.micronutrientsValidation[micronutrient].mustBePositive,
    });
});

export const micronutrientsValidation = Joi.object(validation).optional();