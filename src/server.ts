import { getRecipesBySeason } from './services/recipe-reader';
import { getRecipeResponse, handleRecipesBySeason } from './controllers/recipe-controller';
import { Season } from './model/season';
import * as express from 'express';
import * as path from 'path';
import * as bodyParser from "body-parser";
import { Recipe } from "./model/recipe";

const port = process.env.port || 9000;

const app = express();

app.use(express.static(__dirname));
app.use(bodyParser.json())

app.get('/recipe/:recipeId', getRecipeResponse);

app.get('/recipes/season/:season', handleRecipesBySeason);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})