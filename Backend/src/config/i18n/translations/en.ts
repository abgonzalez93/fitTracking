export const en = {
    components: {
        diet: {
            validation: {
                descriptionValidation: 'Description',
                mealsValidation: 'Meals',
                nameValidation: 'Name',
                userValidation: 'User',
            }
        },
        nutritionGoals: {
            validation: {
                caloriesValidation: 'Calories',
                carbohydratesValidation: 'Carbohydrates',
                fatsValidation: 'Fats',
                proteinsValidation: 'Proteins',
            }
        },
        user: {
            enums: {
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
                },
            },
            controller: {
                usersFetched: 'Fetched all users successfully',
                userCreated: 'Created user successfully',
                userFetched: 'Fetched user successfully',
                userUpdated: 'Updated user successfully',
                userDeleted: 'Deleted user successfully',
            },
            service: {
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
            },
            validation: {
                invalidUserData: '. Invalid user data',
                activityLevelValidation: 'Activity level',
                birthDateValidation: 'Date format',
                clientsValidation: {
                    clientsValidation: 'Clients',
                    mustBeAdvanced: 'Only advanced users can have clients'
                },
                contactInfoValidation: {
                    phoneNumberValidation: 'Phone number',
                    addressValidation: 'Address',
                },
                emailValidation: 'Email',
                foodPreferencesValidation: 'Food preferences',
                genderValidation: 'Gender',
                healthConditionsValidation: 'Health conditions',
                heightValidation: 'height',
                nameValidation: 'Name',
                passwordValidation: {
                    passwordValidation: 'Password',
                    mustContain: 'Password must contain at least 2 digits, 1 uppercase letter, 1 lowercase letter, and 1 special character',
                },
                statusValidation: 'Status',
                surnameValidation: 'Surname',
                usernameValidation: 'Username',
                userTypeValidation: 'User type',
                weightValidation: 'Weight',
            },
        },
    },
    database: {
        connectionShutdown: {
            connectionShutdown: 'Mongoose has been disconnected due to'
        },
        handleDBEvents: {
            connectionError: 'Connection error:',
            startingConnection: 'Starting connection to MongoDB...',
            connectionInitiated: 'Connection initiated, waiting for it to open...',
            connected: 'Connected to MongoDB!',
            disconnecting: 'Disconnecting from MongoDB...',
            connectionClosed: 'Connection to MongoDB closed',
            successfulReconnection: 'Successful reconnection to MongoDB!',
            nodemonRestart: 'Nodemon restart',
            applicationTermination: 'application termination',
        },
        attemptConnection: {
            connectionFailed: {
                connection: 'Connection failed, retrying in',
                seconds: 'seconds...',
                attempt: 'Attempt:',
            },
            connectionToDatabaseError: 'Error connecting to the database:',
            unknownDatabaseError: 'Unknown database connection error occurred',
        },
    },
    middlewares: {
        handleError: {
            internalServerError: 'Internal server error',
        }
    },
    commonMessages: {
        emptyData: 'cannot be empty',
        invalidData: 'Invalid',
        mustBeArray: 'must be an array',
        mustBeNumber: 'must be a number',
        mustBePositive: 'must be a positive number',
        mustBeString: 'must be a string',
        mustBeOneOfTheFollowing: 'must be one of the following',
        minLength: 'have a minimum length of',
        maxLength: 'have a maximum length of',
    },
};