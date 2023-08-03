// Configs and Messages
import { getUserMessages } from '@i18n/messages'

const msg = getUserMessages.model.enums.gender

export const gender = {
    Male: msg.male,
    Female: msg.female,
    Other: msg.other,
    PreferNotToSay: msg.preferNotToSay
} as const
