const db = require('../dbConfig');

module.exports = {
  get,
  getById,
  add
  // remove,
  // update
};

function get() {
  return db('project');
}

async function getById(id) {
  const project = await db('project as p')
    .select('p.id', 'p.name', 'p.description', 'p.completed')
    .where({ id })
    .first();
  const actions = await db('action as a')
    .select('a.id', 'a.description', 'a.notes', 'a.completed')
    .where('a.fk', '=', id);

  return { ...project, actions };
}

function add(project) {
  return db('project')
    .insert(project)
    .then(ids => getById(ids[0]));
}

// select p.id as projectId, p.name as projectName, p.description as projectDescription,
// a.id as actionId, a.description as actionDescription
// from project as p
// join action as a
// where p.id = a.fk
// group by a.description
// order by p.id
