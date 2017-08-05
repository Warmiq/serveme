import * as express from "express";
import * as path from "path";
import { Recipe } from "./model/recipe";

const port = process.env.port || 9000;

const app = express();

app.use(express.static(__dirname));

app.get('/recipe/:recipeId', (request, response) => {
    response.setHeader('Content-Type', 'application/json');

    const json = JSON.stringify({ recipeId: request.params.recipeId })
    response.send(json);

});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})