// glues server to app
const express = require("express");
require("dotenv").config();
const app = express();
const cors = require("cors"); // diff domain apps to interact
const bodyParser = require("body-parser");
const path = require("path");
// const server = require("http").createServer(app);
if (process.env.NODE_ENV === "production") {
  app.use(express.static("frontend/public"));
  app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "public", "index.html"));
  });
}

console.log(__dirname);
console.log(path.join(__dirname, "frontend/public"));
console.log(process.env);
// POOL allows us to run queries on the pool
// update, delete, insert or seed data
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

// test route
app.get("/test", (req, res) => {
  res.json({ message: "It's working" });
});

// Routes
app.use("/api/auth", require("./routes/api/users"));
app.use("/api/cred", require("./routes/api/credentials"));

const port = process.env.NODE_ENV === "production" ? process.env.PORT : 5000;
app.listen(port, () => {
  console.log(`Hello Jon, My server is running on Port ${port}`);
});
