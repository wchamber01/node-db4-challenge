exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("recipe_ingredients")
    .truncate()
    .then(() => knex("ingredients").truncate())
    .then(() => knex("recipes").truncate())
    .then(() => {
      // Inserts seed entries
      return knex("recipes").insert([
        {
          id: 1,
          name: "Cheesy Grits",
          description: "creamy grits with cheese",
          instructions:
            "Bring water and milk/cream to a boil. Add grits. Cook until smoothe. Add cheese and butter and stir until melted. Add salt and pepper to taste."
        },
        {
          id: 2,
          name: "Deviled Eggs",
          description: "delightfully easy",
          instructions:
            "Place eggs in water. Bring water to a boil. Turn off heat when water begins to boil. Let eggs sit in water for 4 minutes. Remove eggs and place directly into ice cold water."
        },
        {
          id: 3,
          name: "Rosemary Brown Sugar Bacon",
          description: "need I say more?",
          instructions:
            "Place bacon on sheet tray. Sprinkle brown sugar, rosemary and pepper over bacon. Bake in 400 degree oven for 30-40 minutes or until desired doneness. "
        }
      ]);
    })
    .then(() => {
      return knex("ingredients").insert([
        {
          id: 1,
          name: "grits"
        },
        { id: 2, name: "cheddar cheese" },
        {
          id: 3,
          name: "cream/milk"
        },
        {
          id: 4,
          name: "butter"
        },
        {
          id: 5,
          name: "water"
        },
        {
          id: 6,
          name: "eggs"
        },
        {
          id: 7,
          name: "mayonaise"
        },
        {
          id: 8,
          name: "dill"
        },
        {
          id: 9,
          name: "mustard"
        },
        {
          id: 10,
          name: "salt"
        },
        {
          id: 11,
          name: "pepper"
        },
        {
          id: 12,
          name: "rosemary"
        },
        {
          id: 13,
          name: "bacon"
        },
        {
          id: 14,
          name: "brown sugar"
        }
      ]);
    })
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
