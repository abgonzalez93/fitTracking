import messages from "../../../../config/i18n/en";

const msg = messages.src.components.user.model.enums.foodPreferences;

export const foodPreferences = {
    Omnivore: msg.omnivore,
    Vegetarian: msg.vegetarian,
    Vegan: msg.vegan,
    Pescetarian: msg.pescetarian,
    GlutenFree: msg.glutenFree,
    LactoseFree: msg.lactoseFree,
} as const;