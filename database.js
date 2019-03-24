const knex = require("knex");
const path = require('path');
var dotenv = require('dotenv');
let confPath = path.join(__dirname,'.env' );
dotenv.config({ path: confPath });

const database = knex({
  client: "pg", // pg is the database library for postgreSQL on knexjs
  connection: {
    host: process.env.DB_HOST, // Your local host IP
    user: process.env.DB_USER, // Your postgres user name
    password: process.env.DB_PASSWORD, // Your postrgres user password
    database: process.env.DB_NAME // Your database name
  }
});

module.exports = database;