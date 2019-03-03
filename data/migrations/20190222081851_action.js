exports.up = function(knex, Promise) {
  return knex.schema.createTable('action', table => {
    table.increments();
    table.text('description').notNullable();
    table.text('notes');
    table.boolean('completed', false); // note, db returns 0 or 1
    table
      .integer('fk')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('project')
      .onDelete('NO ACTION')
      .onUpdate('CASCADE');
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('action');
};
