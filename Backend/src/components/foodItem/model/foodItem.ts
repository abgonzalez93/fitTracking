// External Libraries
import mongoose, { Schema } from 'mongoose'

// Local files
import { type FoodItemInterface } from './foodItemInterface'

const foodItem: Schema = new Schema({
    name: { type: String, required: true },
    nutritionalValues: {
        calories: { type: Number, required: true },
        protein: { type: Number, required: true },
        carbs: { type: Number, required: true },
        fat: { type: Number, required: true },
    },
}, { timestamps: true })

export default mongoose.model<FoodItemInterface>('FoodItem', foodItem)
