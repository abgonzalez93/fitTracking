// Messages
import { getUserMessages } from '@i18n/messages'

const msg = getUserMessages.model.enums.activityLevel

export const activityLevel = {
    Sedentary: msg.sedentary,
    LightlyActive: msg.lightlyActive,
    ModeratelyActive: msg.moderatelyActive,
    VeryActive: msg.veryActive
} as const
