import messages from "../../../../config/i18n/messages/messages";

const msg = messages.src.components.user.model.enums.activityLevel;

export const activityLevel = {
    Sedentary: msg.sedentary,
    LightlyActive: msg.lightlyActive,
    ModeratelyActive: msg.moderatelyActive,
    VeryActive: msg.veryActive,
} as const;