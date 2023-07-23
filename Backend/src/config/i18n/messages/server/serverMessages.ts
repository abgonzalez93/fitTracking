import i18n from "../../i18n";

export const getServerErrorMessages = {
    serverError: {
        error404: (): string => i18n.__('server.error404'),
    }
};