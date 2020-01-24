exports.seed = function(knex) {
  return knex("recipe_ingredients")
    .del()
    .then(() => {
      return knex("recipe_ingredients").insert([
        { recipe_id: 1, ingredient_id: 1, qty: "1/4", units: "cup/s" },
        { recipe_id: 1, ingredient_id: 2, qty: "1/4", units: "cup/s" },
        { recipe_id: 1, ingredient_id: 3, qty: "1/4", units: "cup/s" },
        { recipe_id: 1, ingredient_id: 4, qty: "1", units: "tbls" },
        { recipe_id: 1, ingredient_id: 5, qty: "4", units: "cup/s" },
        { recipe_id: 1, ingredient_id: 10, qty: "1/4", units: "tsp" },
        { recipe_id: 1, ingredient_id: 11, qty: "1/4", units: "tsp" },
        { recipe_id: 2, ingredient_id: 5, qty: "8", units: "each" },
        { recipe_id: 2, ingredient_id: 6, qty: "1/4", units: "cup/s" },
        { recipe_id: 2, ingredient_id: 7, qty: "1/2", units: "cup/s" },
        { recipe_id: 2, ingredient_id: 8, qty: "1", units: "tsp" },
        { recipe_id: 2, ingredient_id: 9, qty: "1", units: "tbls" },
        { recipe_id: 2, ingredient_id: 10, qty: "1/4", units: "tsp" },
        { recipe_id: 2, ingredient_id: 11, qty: "1/4", units: "tsp" },
        { recipe_id: 3, ingredient_id: 12, qty: "1", units: "tbls" },
        { recipe_id: 3, ingredient_id: 13, qty: "1", units: "lb/s" },
        { recipe_id: 3, ingredient_id: 14, qty: "1/2", units: "cup/s" },
        { recipe_id: 3, ingredient_id: 11, qty: "1", units: "tsp" }
      ]);
    });
};
