import { es } from "../../translations/es";
import { createField } from "../../utils/fieldNameCreator";

const translation = es.components.user;

const enums = {
    activityLevel: {
        sedentary: translation.enums.activityLevel.sedentary,
        lightlyActive: translation.enums.activityLevel.lightlyActive,
        moderatelyActive: translation.enums.activityLevel.moderatelyActive,
        veryActive: translation.enums.activityLevel.veryActive,
    },
    foodPreferences: {
        omnivore: translation.enums.foodPreferences.omnivore,
        vegetarian: translation.enums.foodPreferences.vegetarian,
        vegan: translation.enums.foodPreferences.vegan,
        pescetarian: translation.enums.foodPreferences.pescetarian,
        glutenFree: translation.enums.foodPreferences.glutenFree,
        lactoseFree: translation.enums.foodPreferences.lactoseFree,
    },
    gender: {
        male: translation.enums.gender.male,
        female: translation.enums.gender.female,
        other: translation.enums.gender.other,
        preferNotToSay: translation.enums.gender.preferNotToSay,
    },
    healthConditions: {
        none: translation.enums.healthConditions.none,
        diabetes: translation.enums.healthConditions.diabetes,
        lactoseIntolerance: translation.enums.healthConditions.lactoseIntolerance,
        glutenIntolerance: translation.enums.healthConditions.glutenIntolerance,
        hypertension: translation.enums.healthConditions.hypertension,
        heartDisease: translation.enums.healthConditions.heartDisease,
    },
    userStatus: {
        active: translation.enums.userStatus.active,
        inactive: translation.enums.userStatus.inactive,
        suspended: translation.enums.userStatus.suspended,
    },
    userType: {
        basic: translation.enums.userType.basic,
        advanced: translation.enums.userType.advanced,
    }
}

const controller = {
    usersFetched: translation.controller.usersFetched,
    userCreated: translation.controller.userCreated,
    userFetched: translation.controller.userFetched,
    userUpdated: translation.controller.userUpdated,
    userDeleted: translation.controller.userDeleted,
};

const service = {
    userNotFound: translation.service.userNotFound,
    errorGettingAllUsers: translation.service.errorGettingAllUsers,
    errorCreatingUser: translation.service.errorCreatingUser,
    errorGettingUser: translation.service.errorGettingUser,
    errorUpdatingUser: translation.service.errorUpdatingUser,
    errorDeletingUser: translation.service.errorDeletingUser,
    passwordMustBeProvided: translation.service.passwordMustBeProvided,
    usernameAlreadyExists: translation.service.usernameAlreadyExists,
    emailAlreadyExists: translation.service.emailAlreadyExists,
    passwordMustBeDifferentFromYourCurrent: translation.service.passwordMustBeDifferentFromYourCurrent,
};

const validation = {
    invalidUserData: (error: string): string => `${error}${translation.validation.invalidUserData}`,
    activityLevelValidation: createField(translation.validation.activityLevelValidation),
    birthDateValidation: createField(translation.validation.birthDateValidation),
    clientsValidation: {
        ...createField(translation.validation.clientsValidation.clientsValidation),
        mustBeAdvanced: translation.validation.clientsValidation.mustBeAdvanced },
    contactInfoValidation: {
        phoneNumberValidation: createField(translation.validation.contactInfoValidation.phoneNumberValidation),
        addressValidation: createField(translation.validation.contactInfoValidation.addressValidation),
    },
    emailValidation: createField(translation.validation.emailValidation),
    foodPreferencesValidation: createField(translation.validation.foodPreferencesValidation),
    genderValidation: createField(translation.validation.genderValidation),
    healthConditionsValidation: createField(translation.validation.healthConditionsValidation),
    heightValidation: createField(translation.validation.heightValidation),
    nameValidation: createField(translation.validation.nameValidation),
    passwordValidation: {
        ...createField(translation.validation.passwordValidation.passwordValidation),
        mustContain: translation.validation.passwordValidation.mustContain,
    },
    profileImageValidation: {},
    statusValidation: createField(translation.validation.statusValidation),
    surnameValidation: createField(translation.validation.surnameValidation),
    usernameValidation: createField(translation.validation.usernameValidation),
    userTypeValidation: createField(translation.validation.userTypeValidation),
    weightValidation: createField(translation.validation.weightValidation),
};

export const userMessages = {
    model: { enums },
    controller,
    service,
    validation
};