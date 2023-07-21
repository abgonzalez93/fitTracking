import messages from "../../../../config/i18n/messages/messages";

const msg = messages.src.components.user.model.enums.userType;

export const userType = {
    Basic: msg.basic,
    Advanced: msg.advanced,
} as const;