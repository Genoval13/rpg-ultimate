module.exports = {
  development: {
    client: "pg",
    connection: "postgres://localhost/rpg-data",
    migrations: {
      directory: "./database/db/migrations"
    },
    seeds: {
      directory: "./database/db/seeds/dev"
    },
    useNullAsDefault: true
  }
};