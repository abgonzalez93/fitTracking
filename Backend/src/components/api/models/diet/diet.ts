// External Libraries
import mongoose, { Schema, Types } from 'mongoose'

// Local files
import { type DietInterface } from './dietInterface'

const diet: Schema = new Schema({
    user: { type: Types.ObjectId, ref: 'User', required: true },
    name: { type: String, required: false },
    description: { type: String, required: false },
    meals: {
        type: {
            breakfast: [{ type: Types.ObjectId, ref: 'FoodItem' }],
            lunch: [{ type: Types.ObjectId, ref: 'FoodItem' }],
            dinner: [{ type: Types.ObjectId, ref: 'FoodItem' }],
            snacks: [{ type: Types.ObjectId, ref: 'FoodItem' }]
        },
        required: false
    }
}, { timestamps: true })

export default mongoose.model<DietInterface>('Diet', diet)
