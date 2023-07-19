import Joi from 'joi';
import { caloriesValidation, carbohydratesValidation, fatsValidation, proteinsValidation, caloriesPerMealValidation, micronutrientsValidation } from './fields'

export const nutritionalGoalsValidation = Joi.object({
    calories: caloriesValidation,
    carbohydrates: carbohydratesValidation,
    fats: fatsValidation,
    proteins: proteinsValidation,
    caloriesPerMeal: caloriesPerMealValidation,
    micronutrients: micronutrientsValidation
});