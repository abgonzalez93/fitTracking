import mongoose, { Schema } from 'mongoose'
import { type NutritionalGoalsInterface } from './nutritionalGoalsInterface'

const nutritionalGoals: Schema = new Schema({
    calories: { type: Number, required: false },
    carbohydrates: { type: Number, required: false },
    fats: { type: Number, required: false },
    proteins: { type: Number, required: false },
    micronutrients: {
        vitaminA: { type: Number, required: false },
        vitaminB1: { type: Number, required: false },
        vitaminB2: { type: Number, required: false },
        vitaminB3: { type: Number, required: false },
        vitaminB5: { type: Number, required: false },
        vitaminB6: { type: Number, required: false },
        vitaminB7: { type: Number, required: false },
        vitaminB9: { type: Number, required: false },
        vitaminB12: { type: Number, required: false },
        vitaminC: { type: Number, required: false },
        vitaminD: { type: Number, required: false },
        vitaminE: { type: Number, required: false },
        vitaminK: { type: Number, required: false },
        calcium: { type: Number, required: false },
        iron: { type: Number, required: false },
        magnesium: { type: Number, required: false },
        potassium: { type: Number, required: false },
        selenium: { type: Number, required: false },
        sodium: { type: Number, required: false },
        zinc: { type: Number, required: false },
        iodine: { type: Number, required: false },
        copper: { type: Number, required: false },
        chromium: { type: Number, required: false },
        manganese: { type: Number, required: false },
        molybdenum: { type: Number, required: false },
        chloride: { type: Number, required: false }
    }
})

export default mongoose.model<NutritionalGoalsInterface>('NutritionalGoals', nutritionalGoals)
