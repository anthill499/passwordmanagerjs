const jwt = require("jsonwebtoken");
const jwtGenerator = (userId) => {
  const payload = {
    user: { id: userId },
  };
  return jwt.sign(payload, process.env.JWT_KEY, { expiresIn: 3600 });
};
module.exports = jwtGenerator;
