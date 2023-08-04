// Messages
import { getUserMessages } from '@i18n/messages'

const msg = getUserMessages.model.enums.userType

export const userType = {
    Basic: msg.basic,
    Advanced: msg.advanced,
    Admin: msg.admin
} as const
