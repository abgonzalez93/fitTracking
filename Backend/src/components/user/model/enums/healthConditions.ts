import messages from "../../../../config/i18n/messages/messages";

const msg = messages.src.components.user.model.enums.healthConditions;

export const healthConditions = {
    None: msg.none,
    Diabetes: msg.diabetes,
    LactoseIntolerance: msg.lactoseIntolerance,
    GlutenIntolerance: msg.glutenIntolerance,
    Hypertension: msg.hypertension,
    HeartDisease: msg.heartDisease,
} as const;