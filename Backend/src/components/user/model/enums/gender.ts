import { getUserMessages } from "../../../../config/i18n/messages/components/userMessages";

const msg = getUserMessages.model.enums.gender;

export const gender = {
    Male: msg.male,
    Female: msg.female,
    Other: msg.other,
    PreferNotToSay: msg.preferNotToSay,
} as const;