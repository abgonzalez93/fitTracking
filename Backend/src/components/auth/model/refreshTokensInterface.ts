// External Libraries
import { type Document, type Types } from 'mongoose'

export interface RefreshTokensInterface extends Document {
    _id: Types.ObjectId
    tokens: {
        refreshToken: string
    }[]
    createdAt: Date
    updatedAt: Date
}
