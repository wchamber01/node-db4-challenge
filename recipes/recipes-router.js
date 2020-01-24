const express = require("express");

const Recipes = require("./recipes-model.js");

const router = express.Router();

router.get("/", (req, res) => {
  Recipes.getRecipes()
    .then(recipes => {
      res.json(recipes);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "Failed to get recipes" });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  Recipes.getRecipeById(id)
    .then(recipe => {
      if (recipe) {
        res.json(recipe);
      } else {
        res
          .status(404)
          .json({ message: "Could not find recipe with given id." });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "Failed to get recipe" });
    });
});

router.get("/:id/ingredients", (req, res) => {
  const { id } = req.params;

  Recipes.getShoppingList(id)
    .then(steps => {
      if (steps.length) {
        res.json(steps);
      } else {
        res
          .status(404)
          .json({ message: "Could not find ingredients for given recipe" });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "Failed to get ingredients" });
    });
});

router.get("/:id/instructions", (req, res) => {
  const { id } = req.params;

  Recipes.getInstructions(id)
    .then(steps => {
      if (steps.length) {
        res.json(steps);
      } else {
        res.status(404).json({ message: "Could not find the given recipe" });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "Failed to get instructions" });
    });
});

module.exports = router;
