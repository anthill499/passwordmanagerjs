// Connects PostgreSQL to NodeJS
const { Pool } = require("pg");
const keys = require("./config/prodkeys");

const dbCred = {
  user: "postgres",
  password: keys.postgrespw,
  host: "localhost",
  port: 5432,
  database: "password_manager",
};

const pool = new Pool(dbCred);

module.exports = pool;
