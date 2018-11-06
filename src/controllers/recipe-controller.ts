import { MongoRecipeReader } from '../services/recipe-mongo-reader';

import { Response, Request } from "express";
import { Season } from "../model/season";
import { Recipe } from '../model/recipe';

const mongoUrl = "muhahahaha";

export const getRecipeResponse: (request: Request, response: Response) => void =
    async (request, response) => {

        const recipeId = request.params.recipeId
        const recipe = await new MongoRecipeReader(mongoUrl).saveRecipe(new Recipe(recipeId, recipeId));
        const json = JSON.stringify(recipe);
        response.send(json);
    }

export const handleRecipesBySeason: (request: Request, response: Response) => void =
    async (request, response) => {
        try {
            const season = request.params.season.toUpperCase();

            if (season in Season) {
                const responseRecipes = await new MongoRecipeReader(mongoUrl).getRecipesBySeason(season);
                response.status(200).json(responseRecipes); 
            }

            throw new TypeError(`Unrecoginsed season ${season}. Possbile values are - ${Object.keys(Season).map(season => `${season.replace(",", " ")}`)}`);

        } catch (e) {
            const error = e as Error;

            if (error instanceof TypeError) {
                response.status(400).json({ message: error.message, stackTrace: error.stack });
            } else {
                console.log(error)
                response.statusCode = 500;
                response.statusMessage = error.message
                response.send();
            };
        }
    }