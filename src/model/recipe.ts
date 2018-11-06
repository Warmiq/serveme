import { Season } from './season';
import { Ingredient } from "./ingredient";


export class Recipe {


    constructor(public readonly name: string,
        public readonly code: string,
        // public readonly description: string,
        // public ingredients: Ingredient[],
        // public readonly season: Season
        ) { }
}