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
          name: "rosemary"
        },
        {
          id: 11,
          name: "bacon"
        },
        {
          id: 12,
          name: "brown sugar"
        },
        {
          id: 13,
          name: "salt"
        },
        {
          id: 14,
          name: "pepper"
        }
      ]);
    });
};
