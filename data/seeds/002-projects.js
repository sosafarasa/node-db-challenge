
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('projects').insert([
        {
          id: 1,
          project_name: 'Project 1',
          project_description: 'The Project description'
        }
      ]);
    });
};
