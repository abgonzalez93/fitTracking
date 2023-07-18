const commonMessages = {
    emptyData: (field: string): string => `${field} cannot be empty`,
    invalidData: (field: string): string => `Invalid ${field}`
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
                            sedentary: 'Little or no exercise',
                            lightlyActive: 'Light exercise (1-3 days/week)',
                            moderatelyActive: 'Moderate exercise (3-5 days/week)',
                            veryActive: 'Hard exercise (6-7 days a week)',
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
                    invalidUserData: (error: Error): string => `Invalid user data: ${error.message}`,
                    activityLevelValidation: {
                        emptyData: commonMessages.emptyData('Activity level'),
                        mustBeOneOfTheFollowing: (activityLevel: string): string => `Activity level must be one of the following ${activityLevel}`
                    },
                    birthDateValidation: {
                        invalidData: commonMessages.invalidData('date format')
                    },
                    contactInfoValidation: {
                        emptyData: commonMessages.emptyData('Contact information'),
                    },
                    emailValidation: {
                        emptyData: commonMessages.emptyData('Email'),
                        invalidData: commonMessages.invalidData('email')
                    },
                    foodPreferencesValidation: {
                        mustBeAnArray: 'Food preferences must be an array',
                        mustBeOneOfTheFollowing: (foodPreferences: string): string => `Food preferences must be one of the following ${foodPreferences}`
                    },
                    genderValidation: {
                        emptyData: commonMessages.emptyData('Gender'),
                        mustBeOneOfTheFollowing: (gender: string): string => `Gender must be one of the following ${gender}`
                    },
                    healthConditionsValidation: {
                        mustBeAnArray: 'Health conditions must be an array',
                        mustBeOneOfTheFollowing: (healthCondition: string): string => `Health condition must be one of the following ${healthCondition}`
                    },
                    heightValidation: {
                        invalidData: commonMessages.invalidData('height'),
                        mustBePositive: 'Height must be a positive number'
                    },
                    nameValidation: {
                        emptyData: commonMessages.emptyData('Name'),
                        minLength: 'Name should have a minimum length of 1',
                        maxLength: 'Name should have a maximum length of 100'
                    },
                    passwordValidation: {
                        emptyData: commonMessages.emptyData('Password'),
                        minLength: 'Password should have a minimum length of 8',
                        maxLength: 'Password should have a maximum length of 100',
                        mustContain: 'Password must contain at least 2 digits, 1 uppercase letter, 1 lowercase letter, and 1 special character'
                    },
                    profileImageValidation: {
                        emptyData: commonMessages.emptyData('Profile image'),
                    },
                    sessionTokenValidation: {
                        emptyData: commonMessages.emptyData('Session token'),
                    },
                    statusValidation: {
                        emptyData: commonMessages.emptyData('Status'),
                        mustBeOneOfTheFollowing: (userStatus: string): string => `Status must be one of the following ${userStatus}`
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
                        mustBeOneOfTheFollowing: (userType: string): string => `User type must be one of the following ${userType}`
                    },
                    weightValidation: {
                        invalidData: commonMessages.invalidData('weight'),
                        mustBePositive: 'Weight must be a positive number'
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
                    connectionError: (error: Error): string => `Connection error: ${error.message}`,
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
                    connectionToDatabaseError: (error: Error): string => `Error connecting to the database: ${error.message}`,
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