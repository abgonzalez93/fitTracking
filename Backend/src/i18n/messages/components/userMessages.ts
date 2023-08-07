// Messages
import i18n from '@i18n/i18n'
import { createField } from '@i18n/utils/fieldNameCreator'

export const getUserMessages = {
    model: {
        enums: {
            activityLevel: {
                sedentary: i18n.__('components.api.models.userModel.enums.activityLevel.sedentary'),
                lightlyActive: i18n.__('components.api.models.userModel.enums.activityLevel.lightlyActive'),
                moderatelyActive: i18n.__('components.api.models.userModel.enums.activityLevel.moderatelyActive'),
                veryActive: i18n.__('components.api.models.userModel.enums.activityLevel.veryActive')
            },
            foodPreferences: {
                omnivore: i18n.__('components.api.models.userModel.enums.foodPreferences.omnivore'),
                vegetarian: i18n.__('components.api.models.userModel.enums.foodPreferences.vegetarian'),
                vegan: i18n.__('components.api.models.userModel.enums.foodPreferences.vegan'),
                pescetarian: i18n.__('components.api.models.userModel.enums.foodPreferences.pescetarian'),
                glutenFree: i18n.__('components.api.models.userModel.enums.foodPreferences.glutenFree'),
                lactoseFree: i18n.__('components.api.models.userModel.enums.foodPreferences.lactoseFree')
            },
            gender: {
                male: i18n.__('components.api.models.userModel.enums.gender.male'),
                female: i18n.__('components.api.models.userModel.enums.gender.female'),
                other: i18n.__('components.api.models.userModel.enums.gender.other'),
                preferNotToSay: i18n.__('components.api.models.userModel.enums.gender.preferNotToSay')
            },
            healthConditions: {
                none: i18n.__('components.api.models.userModel.enums.healthConditions.none'),
                diabetes: i18n.__('components.api.models.userModel.enums.healthConditions.diabetes'),
                lactoseIntolerance: i18n.__('components.api.models.userModel.enums.healthConditions.lactoseIntolerance'),
                glutenIntolerance: i18n.__('components.api.models.userModel.enums.healthConditions.glutenIntolerance'),
                hypertension: i18n.__('components.api.models.userModel.enums.healthConditions.hypertension'),
                heartDisease: i18n.__('components.api.models.userModel.enums.healthConditions.heartDisease')
            },
            userStatus: {
                active: i18n.__('components.api.models.userModel.enums.userStatus.active'),
                inactive: i18n.__('components.api.models.userModel.enums.userStatus.inactive'),
                suspended: i18n.__('components.api.models.userModel.enums.userStatus.suspended')
            },
            userType: {
                basic: i18n.__('components.api.models.userModel.enums.userType.basic'),
                advanced: i18n.__('components.api.models.userModel.enums.userType.advanced'),
                admin: i18n.__('components.api.models.userModel.enums.userType.admin')
            }
        }
    },
    controller: {
        usersFetched: i18n.__('components.api.controllers.userController.usersFetched'),
        userCreated: i18n.__('components.api.controllers.userController.userCreated'),
        userFetched: i18n.__('components.api.controllers.userController.userFetched'),
        userUpdated: i18n.__('components.api.controllers.userController.userUpdated'),
        userDeleted: i18n.__('components.api.controllers.userController.userDeleted')
    },
    service: {
        userIdRequired: i18n.__('components.api.services.userService.userIdRequired'),
        userNotFound: i18n.__('components.api.services.userService.userNotFound'),
        errorGettingAllUsers: i18n.__('components.api.services.userService.errorGettingAllUsers'),
        errorCreatingUser: i18n.__('components.api.services.userService.errorCreatingUser'),
        errorGettingUser: i18n.__('components.api.services.userService.errorGettingUser'),
        errorUpdatingUser: i18n.__('components.api.services.userService.errorUpdatingUser'),
        errorDeletingUser: i18n.__('components.api.services.userService.errorDeletingUser'),
        passwordMustBeProvided: i18n.__('components.api.services.userService.passwordMustBeProvided'),
        usernameAlreadyExists: i18n.__('components.api.services.userService.usernameAlreadyExists'),
        emailAlreadyExists: i18n.__('components.api.services.userService.emailAlreadyExists'),
        emailOrUsernameMustBeProvided: i18n.__('components.api.services.userService.emailOrUsernameMustBeProvided'),
        passwordMustBeDifferentFromYourCurrent: i18n.__('components.api.services.userService.passwordMustBeDifferentFromYourCurrent')
    },
    validation: {
        invalidUserData: (error: string): string => i18n.__('components.api.validations.userValidation.invalidUserData', error),
        activityLevelValidation: createField(i18n.__('components.api.validations.userValidation.activityLevelValidation')),
        birthDateValidation: createField(i18n.__('components.api.validations.userValidation.birthDateValidation')),
        clientsValidation: {
            ...createField(i18n.__('components.api.validations.userValidation.clientsValidation')),
            mustBeAdvanced: i18n.__('components.api.validations.userValidation.clientsValidation.mustBeAdvanced')
        },
        contactInfoValidation: {
            phoneNumberValidation: createField(i18n.__('components.api.validations.userValidation.contactInfoValidation.phoneNumberValidation')),
            addressValidation: createField(i18n.__('components.api.validations.userValidation.contactInfoValidation.addressValidation'))
        },
        emailValidation: createField(i18n.__('components.api.validations.userValidation.emailValidation')),
        foodPreferencesValidation: createField(i18n.__('components.api.validations.userValidation.foodPreferencesValidation')),
        genderValidation: createField(i18n.__('components.api.validations.userValidation.genderValidation')),
        healthConditionsValidation: createField(i18n.__('components.api.validations.userValidation.healthConditionsValidation')),
        heightValidation: createField(i18n.__('components.api.validations.userValidation.heightValidation')),
        nameValidation: createField(i18n.__('components.api.validations.userValidation.nameValidation')),
        passwordValidation: {
            ...createField(i18n.__('components.api.validations.userValidation.passwordValidation')),
            mustContain: i18n.__('components.api.validations.userValidation.passwordValidation.mustContain')
        },
        profileImageValidation: {},
        statusValidation: createField(i18n.__('components.api.validations.userValidation.statusValidation')),
        surnameValidation: createField(i18n.__('components.api.validations.userValidation.surnameValidation')),
        usernameValidation: createField(i18n.__('components.api.validations.userValidation.usernameValidation')),
        userTypeValidation: createField(i18n.__('components.api.validations.userValidation.userTypeValidation')),
        weightValidation: createField(i18n.__('components.api.validations.userValidation.weightValidation'))
    }
}
