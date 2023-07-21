import { commonMessages } from "../commonMessages";

const validation = {
    descriptionValidation: {
        mustBeString: commonMessages.mustBeString('Description'),
    },
    mealsValidation: {
        emptyData: commonMessages.emptyData('At least, one meal ID is required. Meals'),
        mustBeArray: commonMessages.mustBeArray('Meals'),
        mustBeString: commonMessages.mustBeString('Each meal ID'),
    },
    nameValidation: {
        emptyData: commonMessages.emptyData('Name'),
        mustBeString: commonMessages.mustBeString('Name'),
    },
    userValidation: {
        emptyData: commonMessages.emptyData('User'),
        mustBeString: commonMessages.mustBeString('User'),
    },
};

export const dietMessages = {
    validation
};