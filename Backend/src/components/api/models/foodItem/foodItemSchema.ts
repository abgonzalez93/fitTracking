// External Libraries
import mongoose, { Schema, Types } from 'mongoose'

// Local files
import { type FoodItemInterface } from './foodItemInterface'

const foodItem: Schema = new Schema({
    name: { type: String, required: true },
    nutritionalValues: { type: Types.ObjectId, ref: 'NutritionalValues', required: false }
}, { timestamps: true })

export default mongoose.model<FoodItemInterface>('FoodItem', foodItem)
