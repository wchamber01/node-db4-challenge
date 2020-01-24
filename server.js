const express = require("express");

const RecipesRouter = require("./recipes/recipes-router.js");

const server = express();

server.use(express.json());
server.get("/", (req, res) => res.send("<h1>Node DB4 Project</h1>"));
server.use("/api/recipes", RecipesRouter);
// server.use('/api/ingredients, IngredientsRouter')

module.exports = server;
