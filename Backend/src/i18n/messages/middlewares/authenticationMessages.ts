// Messages
import i18n from '@i18n/i18n'

export const getAuthenticationMessages = {
    authentication: {
        unauthorized: i18n.__('middlewares.authentication.unauthorized'),
        invalidToken: i18n.__('middlewares.authentication.invalidToken'),
        expiredToken: i18n.__('middlewares.authentication.expiredToken'),
        userNotFoundOrNotActive: i18n.__('middlewares.authentication.userNotFoundOrNotActive')
    }
}
