import Joi from 'joi';
import { nameValidation, descriptionValidation, userValidation, mealsValidation } from './fields';

const dietValidation = Joi.object({
    user: userValidation,
    name: nameValidation,
    description: descriptionValidation,
    meals: mealsValidation
});