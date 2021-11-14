// Connects PostgreSQL to NodeJS
const { Pool } = require("pg");
const dotenv = require("dotenv");

const dbCred = {
  user: "postgres",
  password: 1235,
  host: "localhost",
  port: 5432,
  database: "password_manager",
};
const configuration =
  process.env.NODE_ENV === "development"
    ? dbCred
    : {
        connectionString: process.env.DATABASE_URL,
        ssl: { rejectUnauthorized: false },
      };
const pool = new Pool(configuration);
pool.connect((err) => {
  if (err) {
    console.error("connection error", err.stack);
  } else {
    console.log("Connected to PostgreSQL");
  }
});
module.exports = pool;
