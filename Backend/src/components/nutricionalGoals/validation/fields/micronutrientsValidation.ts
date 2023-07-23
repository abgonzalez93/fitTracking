import Joi from 'joi';
import { micronutrients } from './micronutrients/micronutrients';
import { getNutritionalGoalsMessages } from '../../../../config/i18n/messages/components/nutritionalGoalsMessages';

let validation: { [key: string]: any; } = {};

micronutrients.forEach((micronutrient) => {
    validation[micronutrient] = Joi.number().positive().optional().messages({
        'number.base': getNutritionalGoalsMessages.validation.micronutrientsValidation[micronutrient].mustBeNumber,
        'number.positive': getNutritionalGoalsMessages.validation.micronutrientsValidation[micronutrient].mustBePositive,
    });
});

export const micronutrientsValidation = Joi.object(validation).optional();