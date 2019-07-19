
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('actions').insert([
        {
          id: 1,
          action_description: 'Action description',
          action_notes: 'The Action notes',
          project_id: 1
        },
        {
          id: 2,
          action_description: 'Another action description',
          action_notes: 'The action notes',
          project_id: 1
        }
      ]);
    });
};
