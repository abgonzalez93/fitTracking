// External Libraries
import { type Document, type Types } from 'mongoose'

export interface DietInterface extends Document {
    user: Types.ObjectId
    name?: string
    description?: string
    meals?: {
        breakfast: Types.ObjectId[],
        lunch: Types.ObjectId[],
        dinner: Types.ObjectId[],
        snacks: Types.ObjectId[]
    }
    createdAt: Date
    updatedAt: Date
}
