const router = require("express").Router();
const bcrypt = require("bcryptjs");
const pool = require("../../db");
const jwtAuthenticater = require("../../util/jwtGenerator");
const { isValidInfo } = require("../../middleware/authMiddleware");

// Registering/ POST
router.post("/signup", isValidInfo, async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await pool.query("SELECT * FROM users WHERE username = $1", [
      username,
    ]);
    // Similar to ActiveRecord
    if (user.rows.length !== 0) {
      return res.status(401).send("User already exists");
    }

    // If username is unique, bcrypt the input password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = await pool.query(
      "INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *",
      [username, hashedPassword]
    );

    // Create a JWT token, destructures user
    const { user_id } = await newUser.rows[0];
    const token = jwtAuthenticater(user_id);
    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: "Bad Request" });
  }
});

// Sign In, POST
router.post("/signin", isValidInfo, async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await pool.query("SELECT * FROM users WHERE username = $1", [
      username,
    ]);
    if (user.rows.length === 0) {
      res.status(422).json("Invalid Credentials");
    }
    const isValid = await bcrypt.compare(password, user.rows[0].password);
    if (!isValid) {
      res.status(401).json("Wrong Username/Password");
    }

    const token = jwtAuthenticater(user.rows[0].user_id);
    res.send({ token });
  } catch (err) {
    res.status(500).json({ message: "Bad Request" });
  }
});
// Export the router
module.exports = router;
