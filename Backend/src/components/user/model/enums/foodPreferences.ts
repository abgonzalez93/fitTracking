import { getUserMessages } from '@config/i18n/messages'

const msg = getUserMessages.model.enums.foodPreferences

export const foodPreferences = {
    Omnivore: msg.omnivore,
    Vegetarian: msg.vegetarian,
    Vegan: msg.vegan,
    Pescetarian: msg.pescetarian,
    GlutenFree: msg.glutenFree,
    LactoseFree: msg.lactoseFree
} as const
