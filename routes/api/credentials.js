const router = require("express").Router();
const pool = require("../../db");
const jwtAuthenticater = require("../../util/jwtGenerator");
const { authenticateToken } = require("../../middleware/authMiddleware");
const isValidCred = require("../../middleware/credMiddleware");
// ADD token middleware = SOON !

// Fetch all credentials, using id of the user, GET
router.get("/:id", async (req, res) => {
  try {
    const credentials = await pool.query(
      "SELECT * FROM combinations WHERE author_id = $1",
      [req.params.id]
    );
    res.json(credentials.rows);
  } catch (err) {
    res.status(500).json({ message: "Invalid Request" });
  }
});

// Create a new credential, POST
router.post("/new", isValidCred, async (req, res) => {
  const removed = false;
  try {
    const { userId, newPassword, username, companyName, strength } =
      await req.body;
    const cName = await (companyName.charAt(0).toUpperCase() +
      companyName.slice(1));
    const alreadyExist = await pool.query(
      "SELECT * FROM combinations WHERE company_name = $1 AND author_id = $2",
      [cName, userId]
    );

    if (alreadyExist.rows.length > 0) {
      res.status(401).json({ errors: { company: "Company already exists!" } });
    }

    const newCred = await pool.query(
      "INSERT INTO combinations (author_id, username, company_name, pw, strength, removed) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
      [userId, username, cName, newPassword, strength, removed]
    );

    res.json(newCred.rows[0]);
  } catch (err) {
    res.status(500).json({ errors: { global: "Could Not Create Credential" } });
  }
  res.end();
});

// Fetch(read) a credential, using id of object, GET
router.get("/credential", authenticateToken, async (req, res) => {
  try {
    const { credId } = await req.body;
    const foundCredential = await pool.query(
      "SELECT * FROM combinations WHERE entry_id = $1",
      [credId]
    );
    res.json(foundCredential.rows[0]);
  } catch (err) {
    res.status(500).json({ message: "Invalid Request" });
  }
});

// Update a credential, PATCH
router.patch("/credential/update", async (req, res) => {
  try {
    const { credId, password, username } = await req.body;
    const updated = await pool.query(
      `UPDATE * FROM combinations SET password = ${password}, username = ${username}  WHERE entry_id = $1`,
      [credId]
    );
    res.json(updated.rows[0]);
  } catch (err) {
    res.status(500).json({ message: "Could not update request" });
  }
});

// Delete a credential, DELETE
router.delete("/credential", async (req, res) => {
  try {
    const { entryId } = await req.body;
    const deleted = await pool.query(
      `DELETE FROM combinations WHERE entry_id = $1 RETURNING *`,
      [entryId]
    );
    res.json(deleted.rows[0]);
  } catch (err) {
    res.status(500).json({ message: "Could not DELETE credential" });
  }
});

module.exports = router;
