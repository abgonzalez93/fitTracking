// Configs and Messages
import { getCommonMessages } from '@config/i18n/messages'

interface Field {
    emptyData: string
    invalidData: string
    mustBeArray: string
    mustBeNumber: string
    mustBePositive: string
    mustBeString: string
    mustBeOneOfTheFollowing: (array: string[]) => string
    minLength: (length: string) => string
    maxLength: (length: string) => string
}

export function createField (fieldName: string): Field {
    return {
        emptyData: getCommonMessages.emptyData(fieldName),
        invalidData: getCommonMessages.invalidData(fieldName),
        mustBeArray: getCommonMessages.mustBeArray(fieldName),
        mustBeNumber: getCommonMessages.mustBeNumber(fieldName),
        mustBePositive: getCommonMessages.mustBePositive(fieldName),
        mustBeString: getCommonMessages.mustBeString(fieldName),
        mustBeOneOfTheFollowing: getCommonMessages.mustBeOneOfTheFollowing(fieldName),
        minLength: getCommonMessages.minLength(fieldName),
        maxLength: getCommonMessages.maxLength(fieldName)
    }
}
