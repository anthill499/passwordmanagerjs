const router = require("express").Router();
const bcrypt = require("bcryptjs");
const pool = require("../../db");
const jwtAuthenticater = require("../../util/jwtGenerator");
const { isValidInfo } = require("../../middleware/authMiddleware");

// Registering /POST
router.post("/signup", isValidInfo, async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await pool.query("SELECT * FROM users WHERE username = $1", [
      username,
    ]);

    if (user.rows.length !== 0) {
      return res
        .status(401)
        .json({ errors: { global: "Username already taken!" } });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = await pool.query(
      "INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *",
      [username, hashedPassword]
    );
    const currUser = await newUser.rows[0];
    const token = jwtAuthenticater(currUser.user_id);
    res.json({ token, username: currUser.username, id: currUser.user_id });
  } catch (error) {
    return res.status(500).json({ errors: { global: "Bad Request?" } });
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
      return res
        .status(422)
        .json({ errors: { global: "Invalid Credentials" } });
    }
    const isValid = await bcrypt.compare(password, user.rows[0].password);
    if (!isValid) {
      res.status(401).json({ errors: { global: "Wrong Username/Password" } });
    }

    const token = jwtAuthenticater(user.rows[0].user_id);
    return res.json({
      token,
      username: user.rows[0].username,
      id: user.rows[0].user_id,
    });
  } catch (err) {
    return res.status(500).json({ errors: "Bad Request" });
  }
});

module.exports = router;
