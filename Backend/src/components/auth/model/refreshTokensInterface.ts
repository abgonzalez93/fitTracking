// External Libraries
import { type Document, type Types } from 'mongoose'

export interface RefreshTokensInterface extends Document {
    _id: Types.ObjectId
    tokens: Array<{
        refreshToken: string
    }>
    createdAt: Date
    updatedAt: Date
}
