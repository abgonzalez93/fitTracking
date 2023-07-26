import mongoose, { Schema, Types } from 'mongoose';
import { DietInterface } from './dietInterface';

const diet: Schema = new Schema({
    user: { type: Types.ObjectId, ref: 'User', required: true },
    name: { type: String, required: true },
    description: { type: String, required: false },
    meals: { type: [{ type: Types.ObjectId, ref: 'Meal' }], required: true },
}, { timestamps: true });

export default mongoose.model<DietInterface>('Diet', diet);