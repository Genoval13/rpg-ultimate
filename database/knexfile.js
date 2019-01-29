module.exports = {
  development: {
    client: "pg",
    connection: "postgres://localhost/rpg-data",
    migrations: {
      directory: "./backend/db/migrations"
    },
    seeds: {
      directory: "./backend/db/seeds/dev"
    },
    useNullAsDefault: true
  }
};