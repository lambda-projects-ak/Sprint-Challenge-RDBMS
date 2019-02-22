const db = require('../dbConfig');

module.exports = {
  get
  // getById,
  // add,
  // remove,
  // update
};

function get() {
  return db('action');
}
