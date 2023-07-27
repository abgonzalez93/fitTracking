import i18n from '@config/i18n/i18n'
import { createField } from '@config/i18n/utils/fieldNameCreator'

export const getDietMessages = {
    controller: {
        dietsFetched: i18n.__('components.diet.controller.dietsFetched'),
        dietCreated: i18n.__('components.diet.controller.dietCreated'),
        dietFetched: i18n.__('components.diet.controller.dietFetched'),
        dietUpdated: i18n.__('components.diet.controller.dietUpdated'),
        dietDeleted: i18n.__('components.diet.controller.dietDeleted')
    },
    service: {
        errorGettingAllDiets: i18n.__('components.diet.service.errorGettingAllDiets'),
        errorCreatingDiet: i18n.__('components.diet.service.errorCreatingDiet'),
        errorGettingDiet: i18n.__('components.diet.service.errorGettingDiet'),
        errorUpdatingDiet: i18n.__('components.diet.service.errorUpdatingDiet'),
        errorDeletingDiet: i18n.__('components.diet.service.errorDeletingDiet')
    },
    validation: {
        invalidDietData: (error: string): string => i18n.__('components.diet.validation.invalidDietData', error),
        descriptionValidation: createField(i18n.__('components.diet.validation.descriptionValidation')),
        mealsValidation: createField(i18n.__('components.diet.validation.mealsValidation')),
        nameValidation: createField(i18n.__('components.diet.validation.nameValidation')),
        userValidation: createField(i18n.__('components.diet.validation.userValidation'))
    }
}
