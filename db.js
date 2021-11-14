// Connects PostgreSQL to NodeJS
const { Pool } = require("pg");
require("dotenv").config();

const dbCred = {
  user: "postgres",
  password: 1235,
  host: "localhost",
  port: 5432,
  database: "password_manager",
};

const configuration =
  !process.env.NODE_ENV === "production"
    ? dbCred
    : {
        connectionString: process.env.DATABASE_URL,
      };

const pool = new Pool(dbCred);
pool.connect((err) => {
  if (err) {
    console.error("connection error", err.stack);
  } else {
    console.log("Connected to PostgreSQL");
  }
});
module.exports = pool;
