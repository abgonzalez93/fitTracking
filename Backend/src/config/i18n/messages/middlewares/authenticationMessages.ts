// Configs and Messages
import i18n from '@config/i18n/i18n'

export const getAuthenticationMessages = {
    authentication: {
        invalidToken: i18n.__('middlewares.authentication.invalidToken'),
        expiredToken: i18n.__('middlewares.authentication.expiredToken')
    }
}
