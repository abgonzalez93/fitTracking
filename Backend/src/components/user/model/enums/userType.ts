import { getUserMessages } from '@config/i18n/messages'

const msg = getUserMessages.model.enums.userType

export const userType = {
    Basic: msg.basic,
    Advanced: msg.advanced
} as const
