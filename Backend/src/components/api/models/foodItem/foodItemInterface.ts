// Components { Controllers, Models, Routes, Services, Validations }
import { type NutritionalValuesInterface } from '@api/models/nutritionalValues//nutritionalValuesInterface'

export interface FoodItemInterface {
    name: string
    nutritionalValues: NutritionalValuesInterface
}
