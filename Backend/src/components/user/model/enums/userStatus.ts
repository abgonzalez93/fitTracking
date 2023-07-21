import messages from "../../../../config/i18n/messages/messages";

const msg = messages.src.components.user.model.enums.userStatus;

export const userStatus = {
    Active: msg.active,
    Inactive: msg.inactive,
    Suspended: msg.suspended,
} as const;