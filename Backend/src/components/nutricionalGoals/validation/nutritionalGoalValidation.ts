import Joi from 'joi'
import { caloriesValidation, carbohydratesValidation, fatsValidation, proteinsValidation, micronutrientsValidation } from './fields'

export const nutritionalGoalsValidation = Joi.object({
  calories: caloriesValidation,
  carbohydrates: carbohydratesValidation,
  fats: fatsValidation,
  proteins: proteinsValidation,
  micronutrients: micronutrientsValidation
})
