// Messages
import { getUserMessages } from '@i18n/messages'

const msg = getUserMessages.model.enums.healthConditions

export const healthConditions = {
    None: msg.none,
    Diabetes: msg.diabetes,
    LactoseIntolerance: msg.lactoseIntolerance,
    GlutenIntolerance: msg.glutenIntolerance,
    Hypertension: msg.hypertension,
    HeartDisease: msg.heartDisease
} as const
