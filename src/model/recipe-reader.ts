import { Recipe } from "./recipe";
import { Season } from "./season";

export interface RecipeReader {
    getRecipe(code: string): Promise<Recipe>;
    getRecipeByName(name: string): Promise<Recipe>;
    getRecipesBySeason(season: Season): Promise<Recipe[]>;
}

export interface RecipeWriter {

    saveRecipe(recipe: Recipe): Promise<void>;
}