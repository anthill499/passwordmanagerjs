// glues server to app
const express = require("express");
require("dotenv").config();
const app = express();
const cors = require("cors"); // diff domain apps to interact
const bodyParser = require("body-parser");
const path = require("path");
const port =
  process.env.NODE_ENV === "production" ? process.env.PORT || 5000 : 5000;

if (process.env.NODE_ENV === "production") {
  app.use(express.static("frontend/build"));
  app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
}

console.log(__dirname);
console.log(path.join(__dirname, "frontend/build"));

app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

// test route
app.get("/test", (req, res) => {
  res.json({ message: "It's working" });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend/build/index.html"));
});

// Routes
app.use("/api/auth", require("./routes/api/users"));
app.use("/api/cred", require("./routes/api/credentials"));

app.listen(port, () => {
  console.log(`Hello Jon, My server is running on Port ${port}`);
});
