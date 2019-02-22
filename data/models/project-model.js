const db = require('../dbConfig');

module.exports = {
  get,
  // getById,
  add
  // remove,
  // update
};

function get() {
  return db('project');
}

function getById(id) {
  return db('project')
    .where({ id })
    .first();
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
