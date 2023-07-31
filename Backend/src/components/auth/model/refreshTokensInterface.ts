// External Libraries
import { type Document, type Types } from 'mongoose'

export interface RefreshTokensInterface extends Document {
    userId: Types.ObjectId
    token: string
    createdAt: Date
    updatedAt: Date
}
