import Joi from 'joi';
import { ErrorHandler } from '@middlewares/errorHandler';
import { nameValidation, descriptionValidation, userValidation, mealsValidation } from './fields';
import { getDietMessages } from '@config/i18n/messages';
import httpStatus from '@constants/httpStatus';

const dietValidation = Joi.object({
    user: userValidation,
    name: nameValidation,
    description: descriptionValidation,
    meals: mealsValidation
});

export const validateDiet = (dietData: any) => {
    const validationResult = dietValidation.validate(dietData, { abortEarly: false });

    if (validationResult.error) {
        throw new ErrorHandler(httpStatus.BAD_REQUEST, getDietMessages.validation.invalidDietData(validationResult.error.details[0].message));
    }

    return dietData;
};