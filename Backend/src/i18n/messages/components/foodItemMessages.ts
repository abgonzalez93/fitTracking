// Messages
import i18n from '@i18n/i18n'
import { createField } from '@i18n/utils/fieldNameCreator'

export const getFoodItemMessages = {
    validation: {
        nameValidation: createField(i18n.__('components.api.validations.foodItemValidation.nameValidation'))
    }
}
