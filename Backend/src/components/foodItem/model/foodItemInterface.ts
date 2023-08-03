// Components { Controllers, Models, Routes, Services, Validations }
import { type NutritionalValuesInterface } from '@components/nutritionalValues/model/nutritionalValuesInterface'

export interface FoodItemInterface {
    name: string
    nutritionalValues: NutritionalValuesInterface
}
