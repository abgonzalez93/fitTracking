import { es } from "../../translations/es";
import { createField } from "../../utils/fieldNameCreator";

const translation = es.components.diet;

const validation = {
    descriptionValidation: createField(translation.validation.descriptionValidation),
    mealsValidation: createField(translation.validation.mealsValidation),
    nameValidation: createField(translation.validation.nameValidation),
    userValidation: createField(translation.validation.userValidation),
};

export const dietMessages = {
    validation
};