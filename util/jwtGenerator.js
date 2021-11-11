const jwt = require("jsonwebtoken");
const keys = require("../config/prodkeys");
// Signature for authentication
const jwtGenerator = (userId) => {
  const payload = {
    user: { id: userId },
  };
  return jwt.sign(payload, keys.jwtKey, { expiresIn: 3600 });
};
module.exports = jwtGenerator;
