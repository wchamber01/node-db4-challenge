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
          description: "creamy grits with cheese"
        },
        { id: 2, name: "Deviled Eggs", description: "delightfully easy" },
        {
          id: 3,
          name: "Rosemary Brown Sugar Bacon",
          description: "need I say more?"
        }
      ]);
    });
};
