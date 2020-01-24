exports.seed = function(knex) {
  return knex("ingredients")
    .del()
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
    });
};
