// External Libraries
import { type Document } from 'mongoose'

export interface NutritionalValuesInterface extends Document {
    calories?: number
    carbohydrates?: number
    fats?: number
    proteins?: number
    micronutrients?: {
        vitaminA?: number
        vitaminB1?: number
        vitaminB2?: number
        vitaminB3?: number
        vitaminB5?: number
        vitaminB6?: number
        vitaminB7?: number
        vitaminB9?: number
        vitaminB12?: number
        vitaminC?: number
        vitaminD?: number
        vitaminE?: number
        vitaminK?: number
        calcium?: number
        iron?: number
        magnesium?: number
        potassium?: number
        selenium?: number
        sodium?: number
        zinc?: number
        iodine?: number
        copper?: number
        chromium?: number
        manganese?: number
        molybdenum?: number
        chloride?: number
    }
}
