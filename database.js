const knex = require("knex");

const database = knex({
  client: "pg", // pg is the database library for postgreSQL on knexjs
  connection: {
    host: "127.0.0.1", // Your local host IP
    user: "postgres", // Your postgres user name
    password: "postgres", // Your postrgres user password
    database: "testdb" // Your database name
  }
});

module.exports = database;