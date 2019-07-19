
exports.up = function(knex) {
    return knex.schema.createTable('projects', tbl => {
      tbl.increments();
  
      tbl
        .string('project_name', 128)
        .notNullable()
        .unique();
  
      tbl.string('project_description');
  
      tbl.boolean('complete').defaultTo(false);
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('projects')
};
