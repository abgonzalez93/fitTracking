// Configs and Messages
import { getUserMessages } from '@config/i18n/messages'

const msg = getUserMessages.model.enums.userStatus

export const userStatus = {
    Active: msg.active,
    Inactive: msg.inactive,
    Suspended: msg.suspended
} as const
