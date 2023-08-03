// Components { Controllers, Models, Routes, Services, Validations }
import { micronutrients } from '@components/nutritionalValues/validation/fields/micronutrients/micronutrients'

// Configs and Messages
import i18n from '@config/i18n/i18n'
import { createField } from '@config/i18n/utils/fieldNameCreator'

export const getNutritionalValuesMessages = {
    validation: {
        caloriesValidation: createField(i18n.__('components.nutritionValues.validation.caloriesValidation')),
        carbohydratesValidation: createField(i18n.__('components.nutritionValues.validation.carbohydratesValidation')),
        fatsValidation: createField(i18n.__('components.nutritionValues.validation.fatsValidation')),
        micronutrientsValidation: micronutrients.reduce((messages: any, micronutrient: string) => {
            messages[micronutrient] = createField(i18n.__(`components.nutritionValues.micronutrient.${micronutrient}`))
            return messages
        }, {}),
        proteinsValidation: createField(i18n.__('components.nutritionValues.validation.proteinsValidation'))
    }
}