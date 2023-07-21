import { commonMessages } from "../commonMessages";

function createField(fieldName: string) {
    return {
        emptyData: commonMessages.emptyData(fieldName),
        invalidData: commonMessages.invalidData(fieldName),
        mustBeArray: commonMessages.mustBeArray(fieldName),
        mustBePositive: commonMessages.mustBePositive(fieldName),
        minLength: commonMessages.minLength(fieldName),
        maxLength: commonMessages.maxLength(fieldName),
        mustBeOneOfTheFollowing: commonMessages.mustBeOneOfTheFollowing(fieldName)
    };
}

const enums = {
    activityLevel: {
        sedentary: 'Sedentary',
        lightlyActive: 'Lightly active',
        moderatelyActive: 'Moderately active',
        veryActive: 'Very active',
    },
    foodPreferences: {
        omnivore: 'Omnivore',
        vegetarian: 'Vegetarian',
        vegan: 'Vegan',
        pescetarian: 'Pescetarian',
        glutenFree: 'Gluten free',
        lactoseFree: 'Lactose free',
    },
    gender: {
        male: 'Male',
        female: 'Female',
        other: 'Other',
        preferNotToSay: 'Prefer not to say',
    },
    healthConditions: {
        none: 'None',
        diabetes: 'Diabetes',
        lactoseIntolerance: 'Lactose intolerance',
        glutenIntolerance: 'Gluten intolerance',
        hypertension: 'Hypertension',
        heartDisease: 'Heart disease',
    },
    userStatus: {
        active: 'Active',
        inactive: 'Inactive',
        suspended: 'Suspended',
    },
    userType: {
        basic: 'Basic',
        advanced: 'Advanced',
    }
}

const controller = {
    usersFetched: 'Fetched all users successfully',
    userCreated: 'Created user successfully',
    userFetched: 'Fetched user successfully',
    userUpdated: 'Updated user successfully',
    userDeleted: 'Deleted user successfully',
};

const service = {
    userNotFound: 'User not found',
    errorGettingAllUsers: 'Error getting all users',
    errorCreatingUser: 'Error creating user',
    errorGettingUser: 'Error getting user',
    errorUpdatingUser: 'Error updating user',
    errorDeletingUser: 'Error deleting user',
    passwordMustBeProvided: 'Password must be provided',
    usernameAlreadyExists: 'Username already exists',
    emailAlreadyExists: 'Email already exists',
    passwordMustBeDifferentFromYourCurrent: 'The entered password must be different from your current one',
};

const validation = {
    invalidUserData: (error: string): string => `${error}. Invalid user data`,
    activityLevelValidation: createField('Activity level'),
    birthDateValidation: createField('Date format'),
    clientsValidation: {
        ...createField('Clients'),
        mustBeAdvanced: 'Only advanced users can have clients' },
    contactInfoValidation: {
        phoneNumberValidation: createField('Phone number'),
        addressValidation: createField('Address'),
    },
    emailValidation: createField('Email'),
    foodPreferencesValidation: createField('Food preferences'),
    genderValidation: createField('Gender'),
    healthConditionsValidation: createField('Health conditions'),
    heightValidation: createField('height'),
    nameValidation: createField('Name'),
    passwordValidation: {
        ...createField('Password'),
        mustContain: 'Password must contain at least 2 digits, 1 uppercase letter, 1 lowercase letter, and 1 special character',
    },
    profileImageValidation: {},
    statusValidation: createField('Status'),
    surnameValidation: createField('Surname'),
    usernameValidation: createField('Username'),
    userTypeValidation: createField('User type'),
    weightValidation: createField('Weight'),
};

export const userMessages = {
    model: { enums },
    controller,
    service,
    validation
};