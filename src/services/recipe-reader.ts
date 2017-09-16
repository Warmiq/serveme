import { Unit } from '../model/unit';
import { Ingredient, ingredientFactory } from '../model/ingredient';
import { Season } from '../model/season';
import { Recipe } from "../model/recipe";


export const getRecipe: (code: string) => Recipe =
    (recipeId) => {


        const banana = ingredientFactory("banana", "Very delicious stuff", "BANANA", "5", 4, Unit.pieces);
        const orange = ingredientFactory("orange", "Very delicious stuff", "ORANGE", "8", 9, Unit.pieces);

        // decide on mongo or redis store
        const recipe: Recipe = {
            code: recipeId,
            name: "bananarama",
            ingredients: [banana, orange],
            description: "hot bananas with orange",
            season: Season.SUMMER
        }

        return recipe;
    }


export const getRecipesBySeason: (season: Season) => Recipe[] =
    (season) => {

        const bananas = getRecipe(season.toLowerCase());

        return [bananas, bananas];
    };