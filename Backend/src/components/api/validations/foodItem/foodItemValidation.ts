// External Libraries
import Joi from 'joi'

// Components { Controllers, Models, Routes, Services, Validations }
import { nutritionalValuesValidation } from '@api/validations/nutritionalValues/nutritionalValuesValidation'

// Local files
import { nameValidation } from './fields/nameValidation'

export const foodItemValidation = Joi.object({
    name: nameValidation,
    nutritionalValues: nutritionalValuesValidation
})
