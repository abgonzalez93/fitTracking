// Messages
import i18n from '@i18n/i18n'

export const getCommonMessages = {
    emptyData: (field: string): string => i18n.__('commonMessages.emptyData', { field }),
    invalidData: (field: string): string => i18n.__('commonMessages.invalidData', { field }),
    mustBeObject: (field: string): string => i18n.__('commonMessages.mustBeObject', { field }),
    mustBeArray: (field: string): string => i18n.__('commonMessages.mustBeArray', { field }),
    mustBeNumber: (field: string): string => i18n.__('commonMessages.mustBeNumber', { field }),
    mustBePositive: (field: string): string => i18n.__('commonMessages.mustBePositive', { field }),
    mustBeString: (field: string): string => i18n.__('commonMessages.mustBeString', { field }),
    mustBeObjectId: (field: string): string => i18n.__('commonMessages.mustBeObjectId', { field }),
    mustBeOneOfTheFollowing: (field: string) => (array: string[]): string => i18n.__('commonMessages.mustBeOneOfTheFollowing', { field, array: array.join(', ') }),
    minLength: (field: string) => (length: string): string => i18n.__('commonMessages.minLength', { field, length }),
    maxLength: (field: string) => (length: string): string => i18n.__('commonMessages.maxLength', { field, length })
}
