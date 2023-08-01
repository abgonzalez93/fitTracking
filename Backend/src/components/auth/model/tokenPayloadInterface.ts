// External Libraries
import { type Document, type Types } from 'mongoose'

// Components { Controllers, Models, Routes, Services, Validations }
import TokenType from '@components/auth/model/enums/tokenType'

export interface TokenPayloadInterface extends Document {
    id: string;
    type: TokenType;
}