import { es } from "../translations/es";

const translation = es.commonMessages;

export const commonMessages = {
    emptyData: (field: string): string => `${field} ${translation.emptyData}`,
    invalidData: (field: string): string => `${translation.invalidData} ${field}`,
    mustBeArray: (field: string): string => `${field} ${translation.mustBeArray}`,
    mustBeNumber: (field: string): string => `${field} ${translation.mustBeNumber}`,
    mustBePositive: (field: string): string => `${field} ${translation.mustBePositive}`,
    mustBeString: (field: string): string => `${field} ${translation.mustBeString}`,
    mustBeOneOfTheFollowing: (field: string) => { return (array: string): string => `${field} ${translation.mustBeOneOfTheFollowing} ${array}`; },
    minLength: (field: string) => { return (length: string): string => `${field} ${translation.minLength} ${length}`; },
    maxLength: (field: string) => { return (length: string): string => `${field} ${translation.maxLength} ${length}`; },
};