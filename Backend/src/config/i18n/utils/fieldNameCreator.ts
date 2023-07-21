import { commonMessages } from "../messages/commonMessages";

export function createField(fieldName: string) {
    return {
        emptyData: commonMessages.emptyData(fieldName),
        invalidData: commonMessages.invalidData(fieldName),
        mustBeArray: commonMessages.mustBeArray(fieldName),
        mustBeNumber: commonMessages.mustBeNumber(fieldName),
        mustBePositive: commonMessages.mustBePositive(fieldName),
        mustBeString: commonMessages.mustBeString(fieldName),
        mustBeOneOfTheFollowing: commonMessages.mustBeOneOfTheFollowing(fieldName),
        minLength: commonMessages.minLength(fieldName),
        maxLength: commonMessages.maxLength(fieldName),
    };
}