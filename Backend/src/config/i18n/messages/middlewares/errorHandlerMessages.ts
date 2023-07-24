import i18n from "@config/i18n/i18n";

export const getErrorHandlerMessages = {
    handleError: {
        internalServerError: (): string => i18n.__('middlewares.handleError.internalServerError'),
        error404: (): string => i18n.__('middlewares.handleError.error404')
    }
};