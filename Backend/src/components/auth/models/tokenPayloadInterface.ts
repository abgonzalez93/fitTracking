// Components { Controllers, Models, Routes, Services, Validations }
import type TokenType from '@auth/models/enums/tokenType'

export interface TokenPayloadInterface {
    id: string
    type: TokenType
}
