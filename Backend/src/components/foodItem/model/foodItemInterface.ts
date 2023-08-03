export interface FoodItemInterface {
    name: string;
    nutritionalValues: {
        calories: number;
        protein: number;
        carbs: number;
        fat: number;
    };
}