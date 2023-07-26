import i18n from '@config/i18n/i18n'
import { createField } from '@config/i18n/utils/fieldNameCreator'

export const getUserMessages = {
  model: {
    enums: {
      activityLevel: {
        sedentary: i18n.__('components.user.enums.activityLevel.sedentary'),
        lightlyActive: i18n.__('components.user.enums.activityLevel.lightlyActive'),
        moderatelyActive: i18n.__('components.user.enums.activityLevel.moderatelyActive'),
        veryActive: i18n.__('components.user.enums.activityLevel.veryActive')
      },
      foodPreferences: {
        omnivore: i18n.__('components.user.enums.foodPreferences.omnivore'),
        vegetarian: i18n.__('components.user.enums.foodPreferences.vegetarian'),
        vegan: i18n.__('components.user.enums.foodPreferences.vegan'),
        pescetarian: i18n.__('components.user.enums.foodPreferences.pescetarian'),
        glutenFree: i18n.__('components.user.enums.foodPreferences.glutenFree'),
        lactoseFree: i18n.__('components.user.enums.foodPreferences.lactoseFree')
      },
      gender: {
        male: i18n.__('components.user.enums.gender.male'),
        female: i18n.__('components.user.enums.gender.female'),
        other: i18n.__('components.user.enums.gender.other'),
        preferNotToSay: i18n.__('components.user.enums.gender.preferNotToSay')
      },
      healthConditions: {
        none: i18n.__('components.user.enums.healthConditions.none'),
        diabetes: i18n.__('components.user.enums.healthConditions.diabetes'),
        lactoseIntolerance: i18n.__('components.user.enums.healthConditions.lactoseIntolerance'),
        glutenIntolerance: i18n.__('components.user.enums.healthConditions.glutenIntolerance'),
        hypertension: i18n.__('components.user.enums.healthConditions.hypertension'),
        heartDisease: i18n.__('components.user.enums.healthConditions.heartDisease')
      },
      userStatus: {
        active: i18n.__('components.user.enums.userStatus.active'),
        inactive: i18n.__('components.user.enums.userStatus.inactive'),
        suspended: i18n.__('components.user.enums.userStatus.suspended')
      },
      userType: {
        basic: i18n.__('components.user.enums.userType.basic'),
        advanced: i18n.__('components.user.enums.userType.advanced')
      }
    }
  },
  controller: {
    usersFetched: i18n.__('components.user.controller.usersFetched'),
    userCreated: i18n.__('components.user.controller.userCreated'),
    userFetched: i18n.__('components.user.controller.userFetched'),
    userUpdated: i18n.__('components.user.controller.userUpdated'),
    userDeleted: i18n.__('components.user.controller.userDeleted')
  },
  service: {
    userNotFound: i18n.__('components.user.service.userNotFound'),
    errorGettingAllUsers: i18n.__('components.user.service.errorGettingAllUsers'),
    errorCreatingUser: i18n.__('components.user.service.errorCreatingUser'),
    errorGettingUser: i18n.__('components.user.service.errorGettingUser'),
    errorUpdatingUser: i18n.__('components.user.service.errorUpdatingUser'),
    errorDeletingUser: i18n.__('components.user.service.errorDeletingUser'),
    passwordMustBeProvided: i18n.__('components.user.service.passwordMustBeProvided'),
    usernameAlreadyExists: i18n.__('components.user.service.usernameAlreadyExists'),
    emailAlreadyExists: i18n.__('components.user.service.emailAlreadyExists'),
    passwordMustBeDifferentFromYourCurrent: i18n.__('components.user.service.passwordMustBeDifferentFromYourCurrent')
  },
  validation: {
    invalidUserData: (error: string): string => i18n.__('components.user.validation.invalidUserData', error),
    activityLevelValidation: createField(i18n.__('components.user.validation.activityLevelValidation')),
    birthDateValidation: createField(i18n.__('components.user.validation.birthDateValidation')),
    clientsValidation: {
      ...createField(i18n.__('components.user.validation.clientsValidation')),
      mustBeAdvanced: i18n.__('components.user.validation.clientsValidation.mustBeAdvanced')
    },
    contactInfoValidation: {
      phoneNumberValidation: createField(i18n.__('components.user.validation.contactInfoValidation.phoneNumberValidation')),
      addressValidation: createField(i18n.__('components.user.validation.contactInfoValidation.addressValidation'))
    },
    emailValidation: createField(i18n.__('components.user.validation.emailValidation')),
    foodPreferencesValidation: createField(i18n.__('components.user.validation.foodPreferencesValidation')),
    genderValidation: createField(i18n.__('components.user.validation.genderValidation')),
    healthConditionsValidation: createField(i18n.__('components.user.validation.healthConditionsValidation')),
    heightValidation: createField(i18n.__('components.user.validation.heightValidation')),
    nameValidation: createField(i18n.__('components.user.validation.nameValidation')),
    passwordValidation: {
      ...createField(i18n.__('components.user.validation.passwordValidation')),
      mustContain: i18n.__('components.user.validation.passwordValidation.mustContain')
    },
    profileImageValidation: {},
    statusValidation: createField(i18n.__('components.user.validation.statusValidation')),
    surnameValidation: createField(i18n.__('components.user.validation.surnameValidation')),
    usernameValidation: createField(i18n.__('components.user.validation.usernameValidation')),
    userTypeValidation: createField(i18n.__('components.user.validation.userTypeValidation')),
    weightValidation: createField(i18n.__('components.user.validation.weightValidation'))
  }
}
