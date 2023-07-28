// External Libraries
import { type Document, type Types } from 'mongoose'

export interface DietInterface extends Document {
    user: Types.ObjectId
    name?: string
    description?: string
    meals?: Types.ObjectId[]
    createdAt: Date
    updatedAt: Date
}
