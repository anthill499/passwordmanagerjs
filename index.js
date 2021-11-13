// glues server to app
const express = require("express");
const app = express();
const cors = require("cors"); // diff domain apps to interact
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
app.use("/api/auth", require("./routes/api/users"));
app.use("/api/cred", require("./routes/api/credentials"));

const port = process.env.PORT || 5000;
// App Listening On
app.listen(port, () => {
  console.log("Hello Jon, My server is running on Port 5000");
});
// comment
