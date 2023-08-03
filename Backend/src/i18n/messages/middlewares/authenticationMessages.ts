// Configs and Messages
import i18n from '@i18n/i18n'

export const getAuthenticationMessages = {
    authentication: {
        invalidToken: i18n.__('middlewares.authentication.invalidToken'),
        expiredToken: i18n.__('middlewares.authentication.expiredToken')
    }
}
