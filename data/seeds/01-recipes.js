exports.seed = function(knex) {
  return knex("recipes")
    .del()
    .then(() => {
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
    });
};
