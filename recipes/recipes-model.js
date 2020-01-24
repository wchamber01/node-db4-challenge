const db = require("../data/dbConfig.js");

module.exports = {
  getRecipes,
  getRecipeById,
  getShoppingList,
  getInstructions
  // add,
  // update,
  // remove
};

function getRecipes() {
  return db("recipes");
}

function getRecipeById(id) {
  return db("recipes")
    .where({ id })
    .first();
}

function getShoppingList(id) {
  return db("recipe_ingredients as ri")
    .join("ingredients as i", "i.id", "ri.ingredient_id")
    .select("i.name", "ri.qty", "ri.units")
    .where({ "ri.recipe_id": id });
}

// select ingredients.name, recipe_ingredients.ingredient_id, recipe_ingredients.qty, recipe_ingredients.units
// from recipe_ingredients
// join ingredients on ingredients.id = recipe_ingredients.ingredient_id
// where recipe_id = 3

function getInstructions(id) {
  return db("recipes")
    .select("recipes.instructions")
    .where({ id });
}

// function getInstructions(recipe_id) {
//   return db("schemes as sch")
//     .join("steps as st", "sch.id", "st.scheme_id")
//     .select("st.id", "sch.scheme_name", "st.step_number", "st.instructions")
//     .orderBy("st.step_number")
//     .where("st.scheme_id", id);
// }

// function add(scheme) {
//   return db("schemes")
//     .insert(scheme)
//     .then(ids => {
//       return findById(ids[0]);
//     });
// }

// function update(changes, id) {
//   return db("schemes")
//     .where({ id })
//     .update(changes);
// }

// function remove(id) {
//   return db("schemes")
//     .where("id", id)
//     .del();
// }
