// Components { Controllers, Models, Routes, Services, Validations }
import type TokenType from '@auth/model/enums/tokenType'

export interface TokenPayloadInterface {
    id: string
    type: TokenType
}
