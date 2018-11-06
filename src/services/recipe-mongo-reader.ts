import { Unit } from '../model/unit';
import { Ingredient } from '../model/ingredient';
import { Season } from '../model/season';
import { Recipe } from "../model/recipe";
import { RecipeReader, RecipeWriter } from '../model/recipe-reader';
import { MongoClient, Db } from 'mongodb';



export class MongoRecipeReader implements RecipeReader, RecipeWriter {

    private mongoClient: Promise<Db>;

    constructor(mongoUrl: string) {
        this.mongoClient = MongoClient.connect(mongoUrl);
    }


    public async getRecipe(code: string): Promise<Recipe> {

        return new Recipe(code, code);
    }

    public async getRecipeByName(name: string): Promise<Recipe> {
        return new Recipe(name, name);
    }

    public async getRecipesBySeason(season: Season): Promise<Recipe[]> {

        return [];
    }

    public async saveRecipe(recipeToSave: Recipe): Promise<void> {

        const db = await this.mongoClient;

        await db.createCollection<Recipe>("recipe");

        db.collection<Recipe>("recipes").save(recipeToSave);

    }
}
