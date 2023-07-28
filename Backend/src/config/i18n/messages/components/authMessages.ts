// Configs and Messages
import i18n from '@config/i18n/i18n'

export const getAuthMessages = {
    controller: {
        userCreated: i18n.__('components.auth.controller.userCreated'),
        loginSuccessful: i18n.__('components.auth.controller.loginSuccessful')
    },
    service: {
        invalidUserData: i18n.__('components.auth.service.invalidUserData'),
        wrongCredentials: i18n.__('components.auth.service.wrongCredentials')
    }
}
