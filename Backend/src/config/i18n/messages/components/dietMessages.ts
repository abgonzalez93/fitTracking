import i18n from '@config/i18n/i18n';
import { createField } from '@config/i18n/utils/fieldNameCreator';

export const getDietMessages = {
    validation: {
        descriptionValidation: createField(i18n.__('components.diet.validation.descriptionValidation')),
        mealsValidation: createField(i18n.__('components.diet.validation.mealsValidation')),
        nameValidation: createField(i18n.__('components.diet.validation.nameValidation')),
        userValidation: createField(i18n.__('components.diet.validation.userValidation')),
    }
};