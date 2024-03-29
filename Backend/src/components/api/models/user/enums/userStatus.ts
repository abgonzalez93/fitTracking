// Messages
import { getUserMessages } from '@i18n/messages'

const msg = getUserMessages.model.enums.userStatus

export const userStatus = {
    Active: msg.active,
    Inactive: msg.inactive,
    Suspended: msg.suspended
} as const
