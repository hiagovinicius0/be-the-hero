// Update with your config settings.

module.exports = {

  development: {
    client: 'mysql',
    connection: {
      filename: './src/database/db.mysql',
      host : '127.0.0.1',
      user : 'root',
      password : '',
      database : 'semana'
    },
    migrations: {
      directory: './src/database/migrations'
    }
  },
  test: {
    client: 'mysql',
    connection: {
      filename: './src/database/test.mysql',
      host : '127.0.0.1',
      user : 'root',
      password : '',
      database : 'semana'
    },
    migrations: {
      directory: './src/database/migrations'
    }
  },
  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
