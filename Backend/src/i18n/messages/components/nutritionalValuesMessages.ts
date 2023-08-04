// Components { Controllers, Models, Routes, Services, Validations }
import { micronutrients } from '@api/models/nutritionalValues/micronutrients/micronutrients'

// Messages
import i18n from '@i18n/i18n'
import { createField } from '@i18n/utils/fieldNameCreator'

export const getNutritionalValuesMessages = {
    validation: {
        caloriesValidation: createField(i18n.__('components.api.validations.nutritionalValuesValidation.caloriesValidation')),
        carbohydratesValidation: createField(i18n.__('components.api.validations.nutritionalValuesValidation.carbohydratesValidation')),
        fatsValidation: createField(i18n.__('components.api.validations.nutritionalValuesValidation.fatsValidation')),
        proteinsValidation: createField(i18n.__('components.api.validations.nutritionalValuesValidation.proteinsValidation')),
        micronutrientsValidation: micronutrients.reduce((messages: any, micronutrient: string) => {
            messages[micronutrient] = createField(i18n.__(`components.api.models.nutritionalValuesModel.micronutrient.${micronutrient}`))
            return messages
        }, {}),
    }
}
