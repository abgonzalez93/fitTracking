// Components { Controllers, Models, Routes, Services, Validations }
import { micronutrients } from '@components/nutricionalGoals/validation/fields/micronutrients/micronutrients'

// Configs and Messages
import i18n from '@config/i18n/i18n'
import { createField } from '@config/i18n/utils/fieldNameCreator'

export const getNutritionalGoalsMessages = {
    validation: {
        caloriesValidation: createField(i18n.__('components.nutritionGoals.validation.caloriesValidation')),
        carbohydratesValidation: createField(i18n.__('components.nutritionGoals.validation.carbohydratesValidation')),
        fatsValidation: createField(i18n.__('components.nutritionGoals.validation.fatsValidation')),
        micronutrientsValidation: micronutrients.reduce((messages: any, micronutrient: string) => {
            messages[micronutrient] = createField(i18n.__(`components.nutritionGoals.micronutrient.${micronutrient}`))
            return messages
        }, {}),
        proteinsValidation: createField(i18n.__('components.nutritionGoals.validation.proteinsValidation'))
    }
}
