import { Season } from './season';
import { Ingredient } from "./ingredient";

export interface Recipe {
    name: string;
    code: string;
    description: string;
    ingredients: Ingredient[];
    season: Season;
}