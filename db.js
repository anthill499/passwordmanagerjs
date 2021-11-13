// Connects PostgreSQL to NodeJS
const { Pool } = require("pg");

const dbCred = {
  user: "postgres",
  password: process.env.REACT_APP_PG_PW,
  host: "localhost",
  port: 5432,
  database: "password_manager",
};

const pool = new Pool(dbCred);

module.exports = pool;
