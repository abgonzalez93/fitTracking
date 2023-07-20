const commonMessages = {
    emptyData: (field: string): string => `${field} cannot be empty`,
    invalidData: (field: string): string => `Invalid ${field}`,
    mustBeArray: (field: string): string => `${field} must be an array`,
    mustBeNumber: (field: string): string => `${field} must be a number`,
    mustBePositive: (field: string): string => `${field} must be a positive number`,
    mustBeString: (field: string): string => `${field} must be a string`,
    mustBeOneOfTheFollowing: (field: string) => { return (array: string): string => `${field} must be one of the following ${array}`; }
};

const messages = {
    server: {
        runningPort: (port: number): string => `Server running on port ${port}`,
    },
    src: {
        components: {
            user: {
                model: {
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
                        invalidData: commonMessages.invalidData('contact info')
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
                        minLength: 'Name should have a minimum length of 1',
                        maxLength: 'Name should have a maximum length of 100',
                    },
                    passwordValidation: {
                        emptyData: commonMessages.emptyData('Password'),
                        minLength: 'Password should have a minimum length of 8',
                        maxLength: 'Password should have a maximum length of 100',
                        mustContain: 'Password must contain at least 2 digits, 1 uppercase letter, 1 lowercase letter, and 1 special character',
                    },
                    profileImageValidation: {},
                    statusValidation: {
                        emptyData: commonMessages.emptyData('Status'),
                        mustBeOneOfTheFollowing: commonMessages.mustBeOneOfTheFollowing('Status')
                    },
                    surnameValidation: {
                        emptyData: commonMessages.emptyData('Surname'),
                        minLength: 'Surname should have a minimum length of 1',
                        maxLength: 'Surname should have a maximum length of 100'
                    },
                    usernameValidation: {
                        emptyData: commonMessages.emptyData('Username'),
                        minLength: 'Username should have a minimum length of 1',
                        maxLength: 'Username should have a maximum length of 100'
                    },
                    userTypeValidation: {
                        emptyData: commonMessages.emptyData('User type'),
                        mustBeOneOfTheFollowing: commonMessages.mustBeOneOfTheFollowing('User type')
                    },
                    weightValidation: {
                        invalidData: commonMessages.invalidData('weight'),
                        mustBePositive: commonMessages.mustBePositive('Weight')
                    },
                }
            },
            nutritionalGoals: {
                validation: {
                    caloriesPerMealValidation: {
                        mustBeNumber: commonMessages.mustBePositive('Calories'),
                        mustBePositive: commonMessages.mustBePositive('Calories')
                    },
                    caloriesValidation: {
                        mustBeNumber: commonMessages.mustBePositive('Calories'),
                        mustBePositive: commonMessages.mustBePositive('Calories')
                    },
                    carbohydratesValidation: {
                        mustBeNumber: commonMessages.mustBePositive('Carbohydrates'),
                        mustBePositive: commonMessages.mustBePositive('Carbohydrates')
                    },
                    fatsValidation: {
                        mustBeNumber: commonMessages.mustBePositive('Fats'),
                        mustBePositive: commonMessages.mustBePositive('Fats')
                    },
                    micronutrientsValidation: {
                        mustBeNumber: commonMessages.mustBePositive('Micronutrients'),
                        mustBePositive: commonMessages.mustBePositive('Micronutrients')
                    },
                    proteinsValidation: {
                        mustBeNumber: commonMessages.mustBePositive('Proteins'),
                        mustBePositive: commonMessages.mustBePositive('Proteins')
                    },
                }
            },
            diet: {
                validation: {
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
                }
            }
        },
        database: {
            dbConnect: {
                connectionShutdown: {
                    connectionShutdown: (msg: string): string => `Mongoose has been disconnected due to ${msg}`,
                },
                handleDBEvents: {
                    connectionError: (error: string): string => `Connection error: ${error}`,
                    startingConnection: 'Starting connection to MongoDB...',
                    connectionInitiated: 'Connection initiated, waiting for it to open...',
                    connected: 'Connected to MongoDB!',
                    disconnecting: 'Disconnecting from MongoDB...',
                    connectionClosed: 'Connection to MongoDB closed',
                    successfulReconnection: 'Successful reconnection to MongoDB!',
                    nodemonRestart: 'nodemon restart',
                    applicationTermination: 'application termination',
                },
                attemptConnection: {
                    connectionFailed: (attempt: number, retryInSeconds: number): string => `Connection failed, retrying in ${retryInSeconds} seconds... (attempt ${attempt + 1})`,
                    connectionToDatabaseError: (error: string): string => `Error connecting to the database: ${error}`,
                    unknownDatabaseError: 'Unknown database connection error occurred',
                }
            }
        },
        middlewares: {
            errorHandler : {
                handleError : {
                    internalServerError: 'Internal server error',
                }
            }
        },
        routes: {}
    }
};

export default messages;