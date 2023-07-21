import messages from "../../../../config/i18n/messages/messages";

const msg = messages.src.components.user.model.enums.gender;

export const gender = {
    Male: msg.male,
    Female: msg.female,
    Other: msg.other,
    PreferNotToSay: msg.preferNotToSay,
} as const;