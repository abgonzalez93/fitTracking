export const commonMessages = {
    emptyData: (field: string): string => `${field} cannot be empty`,
    invalidData: (field: string): string => `Invalid ${field}`,
    mustBeArray: (field: string): string => `${field} must be an array`,
    mustBeNumber: (field: string): string => `${field} must be a number`,
    mustBePositive: (field: string): string => `${field} must be a positive number`,
    mustBeString: (field: string): string => `${field} must be a string`,
    mustBeOneOfTheFollowing: (field: string) => { return (array: string): string => `${field} must be one of the following ${array}`; },
    minLength: (field: string) => { return (length: string): string => `${field} have a minimum length of ${length}`; },
    maxLength: (field: string) => { return (length: string): string => `${field} have a maximum length of ${length}`; },
};