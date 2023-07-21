import i18n from 'i18n';

export const configureI18n = (i18nInstance: typeof i18n) => {
    i18nInstance.configure({
        locales: ['en', 'es'],
        directory: __dirname + '/translations',
        defaultLocale: 'en',
        autoReload: true,
        objectNotation: true,
        register: global
    });
}