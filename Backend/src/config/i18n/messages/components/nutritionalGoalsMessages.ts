import { micronutrients } from "../../../../components/nutricionalGoals/validation/fields/micronutrients/micronutrients";
import { es } from "../../translations/es";
import { createField } from "../../utils/fieldNameCreator";

const translation = es.components.nutritionGoals;

const validation = {
    caloriesValidation: createField(translation.validation.caloriesValidation),
    carbohydratesValidation: createField(translation.validation.carbohydratesValidation),
    fatsValidation: createField(translation.validation.fatsValidation),
    micronutrientsValidation: micronutrients.reduce((messages: any, micronutrient: string) => {
        messages[micronutrient] = createField(micronutrient)
        return messages;
    }, {}),
    proteinsValidation: createField(translation.validation.proteinsValidation),
};

export const nutritionalGoalsMessages = {
    validation
};