const db = require('../dbConfig');

module.exports = {
  get,
  getById,
  add
  // remove,
  // update
};

function get() {
  return db('action');
}

function getById(id) {
  return db('action')
    .where({ id })
    .first();
}

function add(action) {
  return db('action')
    .insert(action)
    .then(ids => getById(ids[0]));
}
