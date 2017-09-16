import { getRecipe, getRecipesBySeason } from '../services/recipe-reader';

import { Response, Request } from "express";
import { Season } from "../model/season";

export const getRecipeResponse: (request: Request, response: Response) => void =
    (request, response) => {
        response.setHeader('Content-Type', 'application/json');

        const recipe = getRecipe("testietest");
        const json = JSON.stringify(recipe);
        response.send(json);
    }

export const handleRecipesBySeason: (request: Request, response: Response) => void =
    (request, response) => {
        try {
            const season = request.params.season.toLowerCase();

            if (season in Season) {
                const responseRecipes = getRecipesBySeason(season);
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