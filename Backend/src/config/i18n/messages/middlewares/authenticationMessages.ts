import i18n from '@config/i18n/i18n'

export const getAuthenticationMessages = {
    authentication: {
        bearerTokenRequired: i18n.__('middlewares.authentication.bearerTokenRequired'),
        invalidUserData: i18n.__('middlewares.authentication.invalidUserData'),
        invalidUserStatus: i18n.__('middlewares.authentication.invalidUserStatus'),
        invalidToken: i18n.__('middlewares.authentication.invalidToken'),
        expiredToken: i18n.__('middlewares.authentication.expiredToken'),
        tokenNotActiveYet: i18n.__('middlewares.authentication.tokenNotActiveYet'),
        couldNotVerifyToken: i18n.__('middlewares.authentication.couldNotVerifyToken'),
    }
}
