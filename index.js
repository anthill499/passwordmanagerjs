const express = require("express");
require("dotenv").config();
const app = express();
const cors = require("cors"); // diff domain apps to interact
const bodyParser = require("body-parser");
const path = require("path");
const port = process.env.NODE_ENV === "production" ? process.env.PORT : 5000;
// this is a common error, port number
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "frontend/build")));
//   app.get("/", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
//   });
// }

app.use(express.json());
app.use(cors());

// test route
app.get("/test", (req, res) => {
  res.json({ message: "It's the test route" });
});

// Routes
app.use("/api/auth", require("./routes/api/users"));
app.use("/api/cred", require("./routes/api/credentials"));

app.listen(port, () => {
  console.log(`Server is running on Port ${port}`);
});
