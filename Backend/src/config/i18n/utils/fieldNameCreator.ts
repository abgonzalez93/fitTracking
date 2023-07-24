import { getCommonMessages } from '@config/i18n/messages';

export function createField(fieldName: string) {
    return {
        emptyData: getCommonMessages.emptyData(fieldName),
        invalidData: getCommonMessages.invalidData(fieldName),
        mustBeArray: getCommonMessages.mustBeArray(fieldName),
        mustBeNumber: getCommonMessages.mustBeNumber(fieldName),
        mustBePositive: getCommonMessages.mustBePositive(fieldName),
        mustBeString: getCommonMessages.mustBeString(fieldName),
        mustBeOneOfTheFollowing: getCommonMessages.mustBeOneOfTheFollowing(fieldName),
        minLength: getCommonMessages.minLength(fieldName),
        maxLength: getCommonMessages.maxLength(fieldName),
    };
}