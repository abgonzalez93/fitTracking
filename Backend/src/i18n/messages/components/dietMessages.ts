// Messages
import i18n from '@i18n/i18n'
import { createField } from '@i18n/utils/fieldNameCreator'

export const getDietMessages = {
    controller: {
        dietsFetched: i18n.__('components.api.controllers.dietController.dietsFetched'),
        dietCreated: i18n.__('components.api.controllers.dietController.dietCreated'),
        dietFetched: i18n.__('components.api.controllers.dietController.dietFetched'),
        dietUpdated: i18n.__('components.api.controllers.dietController.dietUpdated'),
        dietDeleted: i18n.__('components.api.controllers.dietController.dietDeleted')
    },
    service: {
        errorGettingAllDiets: i18n.__('components.api.services.dietService.errorGettingAllDiets'),
        errorCreatingDiet: i18n.__('components.api.services.dietService.errorCreatingDiet'),
        errorGettingDiet: i18n.__('components.api.services.dietService.errorGettingDiet'),
        errorUpdatingDiet: i18n.__('components.api.services.dietService.errorUpdatingDiet'),
        errorDeletingDiet: i18n.__('components.api.services.dietService.errorDeletingDiet')
    },
    validation: {
        invalidDietData: (error: string): string => i18n.__('components.api.validations.dietValidation.invalidDietData', error),
        descriptionValidation: createField(i18n.__('components.api.validations.dietValidation.descriptionValidation')),
        mealsValidation: createField(i18n.__('components.api.validations.dietValidation.mealsValidation')),
        nameValidation: createField(i18n.__('components.api.validations.dietValidation.nameValidation')),
        userValidation: createField(i18n.__('components.api.validations.dietValidation.userValidation'))
    }
}
