const db = require('../dbConfig');

module.exports = {
  get,
  getById,
  getByPage,
  add
  // remove,
  // update
};

function get() {
  return db('action');
}

function getByPage(pageNumber) {
  return db('action')
    .limit(2)
    .offset(2 * (pageNumber - 1));
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
