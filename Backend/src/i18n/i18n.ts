// External Libraries
import i18n from 'i18n'
import path from 'path'

i18n.configure({
    locales: ['en', 'es'],
    defaultLocale: 'es',
    directory: path.join(__dirname, '/translations'),
    fallbacks: { es: 'en' },
    header: 'accept-language',
    objectNotation: true,
    updateFiles: false
})

export default i18n
