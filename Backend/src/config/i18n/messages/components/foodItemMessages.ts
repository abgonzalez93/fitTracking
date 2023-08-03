// Configs and Messages
import i18n from '@config/i18n/i18n'
import { createField } from '@config/i18n/utils/fieldNameCreator'

export const getFoodItemMessages = {
    validation: {
        nameValidation: createField(i18n.__('components.foodItem.validation.nameValidation'))
    }
}
