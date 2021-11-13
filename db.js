// Connects PostgreSQL to NodeJS
const { Pool } = require("pg");
const dotenv = require("dotenv");

const prodCred = {
  user: process.env.USER,
  password: JSON.parse(process.env.PG_PW),
  host: process.env.HOST,
  port: JSON.parse(process.env.PORT),
  database: process.env.DB,
};

const dbCred = {
  user: "postgres",
  password: 1235,
  host: "localhost",
  port: 5432,
  database: "password_manager",
};
const pool = new Pool(dbCred);
pool.connect((err) => {
  if (err) {
    console.error("connection error", err.stack);
  } else {
    console.log("Connected to PostgreSQL");
    console.log(prodCred);
  }
});
module.exports = pool;
