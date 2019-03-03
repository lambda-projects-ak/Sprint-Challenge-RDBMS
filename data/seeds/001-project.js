exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('project')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('project').insert([
        {
          id: 1,
          name: 'Finish Lambda School',
          description: 'Self explanatory.',
          completed: false
        },
        {
          id: 2,
          name: 'Make Tacos',
          description:
            'This project is no joke. It is key to finishing Lambda School.',
          completed: false
        }
      ]);
    });
};
