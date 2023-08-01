// External Libraries
import mongoose, { Schema, Types } from 'mongoose'

// Components { Controllers, Models, Routes, Services, Validations }
import { type UserInterface } from '@components/user/model/userInterface'

const refreshTokens: Schema = new Schema({
    _id: { type: Types.ObjectId, ref: 'User', required: true },
    tokens: [{
        refreshToken: { type: String, required: true }
    }]
}, { timestamps: true })

export default mongoose.model<UserInterface>('RefreshTokens', refreshTokens)
