exports.up = function(knex, Promise) {
  return knex.schema.createTable('project', table => {
    table.increments();
    table
      .string('name', 128)
      .unique()
      .notNullable();
    table.text('description').notNullable();
    table.boolean('completed').notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('project');
};
