// glues server to app
const express = require("express");
const app = express();
const cors = require("cors"); // diff domain apps to interact
const keys = require("./config/prodkeys");
const bodyParser = require("body-parser");

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
app.use("/auth", require("./routes/api/users"));
app.use("/cred", require("./routes/api/credentials"));

// App Listening On
app.listen(5000, () => {
  console.log("Hello Jon, My server is running on Port 5000");
});
