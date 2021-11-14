const jwt = require("jsonwebtoken");
require("dotenv").config();

const jwtGenerator = (userId) => {
  const payload = {
    user: { id: userId },
  };
  return jwt.sign(payload, process.env.JWT_KEY, { expiresIn: 3600 });
};
module.exports = jwtGenerator;
