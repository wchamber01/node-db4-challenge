exports.up = function(knex) {
  return knex.schema
    .createTable("recipes", tbl => {
      tbl.increments();
      tbl.string("name").notNullable();
      tbl.string("description");
      tbl.string("instructions").notNullable();
    })
    .crteateTable("ingredients", tbl => {
      tbl.increments();
      tbl.string("name").notNullable;
      tbl.float("qty").notNullable;
    })
    .createTable("recipe_ingredients", tbl => {
      tbl.increments();
      tbl
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .reference("id")
        .inTable("recipes");
      tbl
        .integer("ingredient_id")
        .unsigned()
        .notNullable()
        .reference("id")
        .inTable("ingredients");
    });
};

exports.down = function(knex) {};
