import { commonMessages } from "../commonMessages";
import { micronutrients } from "../../../../components/nutricionalGoals/validation/fields/micronutrients/micronutrients";

const validation = {
    caloriesPerMealValidation: {
        mustBeNumber: commonMessages.mustBePositive('Calories'),
        mustBePositive: commonMessages.mustBePositive('Calories')
    },
    caloriesValidation: {
        mustBeNumber: commonMessages.mustBePositive('Calories'),
        mustBePositive: commonMessages.mustBePositive('Calories')
    },
    carbohydratesValidation: {
        mustBeNumber: commonMessages.mustBePositive('Carbohydrates'),
        mustBePositive: commonMessages.mustBePositive('Carbohydrates')
    },
    fatsValidation: {
        mustBeNumber: commonMessages.mustBePositive('Fats'),
        mustBePositive: commonMessages.mustBePositive('Fats')
    },
    micronutrientsValidation: micronutrients.reduce((messages: any, micronutrient: string) => {
        messages[micronutrient] = {
            mustBeNumber: commonMessages.mustBeNumber(micronutrient),
            mustBePositive: commonMessages.mustBePositive(micronutrient),
        }
        return messages;
    }, {}),
    proteinsValidation: {
        mustBeNumber: commonMessages.mustBePositive('Proteins'),
        mustBePositive: commonMessages.mustBePositive('Proteins')
    },
};

export const nutritionalGoalsMessages = {
    validation
};