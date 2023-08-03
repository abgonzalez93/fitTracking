// Configs and Messages
import i18n from '@i18n/i18n'

export const getAuthMessages = {
    controller: {
        userCreated: i18n.__('components.auth.controller.userCreated'),
        loginSuccessful: i18n.__('components.auth.controller.loginSuccessful'),
        logoutSuccessful: i18n.__('components.auth.controller.logoutSuccessful'),
        refreshedAccessToken: i18n.__('components.auth.controller.refreshedAccessToken')
    },
    service: {
        invalidUserData: i18n.__('components.auth.service.invalidUserData'),
        wrongCredentials: i18n.__('components.auth.service.wrongCredentials'),
        invalidToken: i18n.__('components.auth.service.invalidToken'),
        couldNotVerifyToken: i18n.__('components.auth.service.couldNotVerifyToken'),
        couldNotGenerateToken: i18n.__('components.auth.service.couldNotGenerateToken')
    }
}
