// Connects PostgreSQL to NodeJS
const { Pool } = require("pg");
require("dotenv").config();

const dbCred = {
  user: process.env.REACT_APP_USER,
  password: process.env.REACT_APP_PG_PW,
  host: process.env.REACT_APP_HOST,
  port: process.env.REACT_APP_PORT,
  database: process.env.REACT_APP_DB,
};

const prodConfig = process.env.REACT_APP_DATABASE_URL,
const devConfig = `postgres://${process.env.REACT_APP_USER}:${process.env.REACT_APP_PG_PW}@${process.env.REACT_APP_HOST}:${process.env.REACT_APP_PORT}/${process.env.REACT_APP_DB}`
const pool = new Pool({
  connectionString: process.env.NODE_ENV === "production" ? prodConfig : devConfig,
});

module.exports = pool;
