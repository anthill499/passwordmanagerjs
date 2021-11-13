const jwt = require("jsonwebtoken");

// Signature for authentication
const jwtGenerator = (userId) => {
  const payload = {
    user: { id: userId },
  };
  return jwt.sign(payload, process.env.REACT_APP_JWT_KEY, { expiresIn: 3600 });
};
module.exports = jwtGenerator;
