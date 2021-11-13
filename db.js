// Connects PostgreSQL to NodeJS
const { Pool } = require("pg");
require("dotenv").config();

// const dbCred = {
//   user: process.env.USER,
//   password: process.env.PG_PW,
//   host: process.env.HOST,
//   port: process.env.PORT,
//   database: process.env.DB,
// };

const dbCred = {
  user: "postgres",
  password: 1235,
  host: "localhost",
  port: 5432,
  database: "password_manager",
};

const prodConfig = process.env.REACT_APP_DATABASE_URL;
const devConfig = `postgres://${process.env.REACT_APP_USER}:${process.env.REACT_APP_PG_PW}@${process.env.REACT_APP_HOST}:${process.env.REACT_APP_PORT}/${process.env.REACT_APP_DB}`;
// const pool = new Pool({
//   connectionString: process.env.NODE_ENV === "production" ? prodConfig : devConfig,
// });
const pool = new Pool(dbCred);
module.exports = pool;
