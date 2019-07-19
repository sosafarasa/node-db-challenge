
exports.up = function(knex) {
    return knex.schema.createTable('actions', tbl => {
      tbl.increments()
  
      tbl.string('action_description').notNullable();
  
      tbl.string('action_notes');
  
      tbl.boolean('complete').defaultTo(false);
  
      tbl
        .integer('project_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    });
};
  
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('actions');
};
