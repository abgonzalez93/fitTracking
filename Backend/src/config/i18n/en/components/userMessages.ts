import { commonMessages } from "../commonMessages";

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
        lactoseFree: 'Lactose free'
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
    activityLevelValidation: {
        mustBeOneOfTheFollowing: commonMessages.mustBeOneOfTheFollowing('Activity level')
    },
    birthDateValidation: {
        invalidData: commonMessages.invalidData('date format')
    },
    clientsValidation: {
        mustBeArray: commonMessages.mustBeArray('Clients'),
        invalidData: commonMessages.invalidData('client'),
        mustBeAdvanced: 'Only advanced users can have clients'
    },
    contactInfoValidation: {
        phoneNumberValidation: {
            invalidData: commonMessages.invalidData('phone number')
        },
        addressValidation: {
            invalidData: commonMessages.invalidData('address')
        }
    },
    emailValidation: {
        emptyData: commonMessages.emptyData('Email'),
        invalidData: commonMessages.invalidData('email'),
    },
    foodPreferencesValidation: {
        mustBeArray: commonMessages.mustBeArray('Food preferences'),
        mustBeOneOfTheFollowing: commonMessages.mustBeOneOfTheFollowing('Food preferences')
    },
    genderValidation: {
        mustBeOneOfTheFollowing: commonMessages.mustBeOneOfTheFollowing('Gender')
    },
    healthConditionsValidation: {
        mustBeArray: commonMessages.mustBeArray('Health conditions'),
        mustBeOneOfTheFollowing: commonMessages.mustBeOneOfTheFollowing('Health condition')
    },
    heightValidation: {
        invalidData: commonMessages.invalidData('height'),
        mustBePositive: commonMessages.mustBePositive('Height')
    },
    nameValidation: {
        emptyData: commonMessages.emptyData('Name'),
        minLength: commonMessages.minLength('Activity level'),
        maxLength: commonMessages.maxLength('Activity level'),
    },
    passwordValidation: {
        emptyData: commonMessages.emptyData('Password'),
        minLength: commonMessages.minLength('Password'),
        maxLength: commonMessages.maxLength('Password'),
        mustContain: 'Password must contain at least 2 digits, 1 uppercase letter, 1 lowercase letter, and 1 special character',
    },
    profileImageValidation: {},
    statusValidation: {
        emptyData: commonMessages.emptyData('Status'),
        mustBeOneOfTheFollowing: commonMessages.mustBeOneOfTheFollowing('Status')
    },
    surnameValidation: {
        emptyData: commonMessages.emptyData('Surname'),
        minLength: commonMessages.minLength('Surname'),
        maxLength: commonMessages.maxLength('Surname'),
    },
    usernameValidation: {
        emptyData: commonMessages.emptyData('Username'),
        minLength: commonMessages.minLength('Username'),
        maxLength: commonMessages.maxLength('Username'),
    },
    userTypeValidation: {
        emptyData: commonMessages.emptyData('User type'),
        mustBeOneOfTheFollowing: commonMessages.mustBeOneOfTheFollowing('User type')
    },
    weightValidation: {
        invalidData: commonMessages.invalidData('weight'),
        mustBePositive: commonMessages.mustBePositive('Weight')
    },
};

export const userMessages = {
    model: { enums },
    controller,
    service,
    validation
};