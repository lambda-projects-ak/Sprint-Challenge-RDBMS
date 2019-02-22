// Update with your config settings.

const pg = require('pg');
pg.defaults.ssl = true;

module.exports = {
  development: {
    client: 'pg',
    useNullAsDefault: true,
    connection:
      'postgres://ywkravqzcrudhl:86b517bc2a90d68d090f1f8dc2f6cd1afe3ca8fe10f37cfb617bfc62559efb79@ec2-54-83-17-151.compute-1.amazonaws.com:5432/d7m2k7h8vm8fv',
    migrations: {
      directory: './data/migrations',
      tableName: 'knex_migrations'
    },
    seeds: { directory: './data/seeds' },
    pool: {
      min: 2,
      max: 10
    }
  }
};
