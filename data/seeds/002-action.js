exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('action')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('action').insert([
        {
          id: 1,
          description: 'See other project to gain insights.',
          notes:
            "I'm not sure anything information is needed other than seeing project 2...",
          completed: false,
          fk: 1
        },
        { id: 2, description: 'Go to the store', completed: false, fk: 2 },
        {
          id: 3,
          description: 'Buy necessary ingredients',
          completed: false,
          fk: 2
        },
        { id: 4, description: 'Prepare kitchen', completed: false, fk: 2 },
        {
          id: 5,
          description: 'Prepare cold ingredients - salsa and guac',
          completed: false,
          fk: 2
        },
        {
          id: 6,
          description: 'Cook meat, warm beans',
          completed: false,
          fk: 2
        },
        {
          id: 7,
          description: 'Put all the things in taco shells',
          completed: false,
          fk: 2
        },
        { id: 8, description: 'Eat the tacos', completed: false, fk: 2 },
        { id: 9, description: 'Relax', completed: false, fk: 2 }
      ]);
    });
};
