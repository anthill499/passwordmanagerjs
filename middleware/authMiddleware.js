// Token Authenticator
const jwt = require("jsonwebtoken");
const { hasSpecChar, hasSqlTerms } = require("./variables");
async function authenticateToken(req, res, next) {
  try {
    const jwtToken = await req.header("token");
    if (!jwtToken) {
      return res.status(401).json({ message: "You are not authorized" });
    }
    const payload = jwt.verify(jwtToken, keys.jwtKey);
    req.user = await payload.user;
  } catch (err) {
    console.error({ err });
    return res.status(401).json({ message: "You are not authorized" });
  }
}
// regEx: "^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
// Similar to validator
async function isValidInfo(req, res, next) {
  const errors = {};
  const { username, password } = await req.body;

  // Fill errors hash with errors
  if (req.path === "/signup") {
    if (username.length === 0) {
      errors["username"] = "Username can not be empty";
    } else if (username.length < 8 && username.length !== 0) {
      errors["username"] = "Username is too short. Choose 8 characters";
    }
    if (password.length === 0) {
      errors["password"] = "Password can not be empty";
    } else if (password.length < 8 && password.length !== 0) {
      errors["password"] = "Password is too short. Choose 8 characters";
    }

    // First layer SQL Injection Protect
    if (hasSpecChar(username) === true)
      errors["username"] = "Do not use special characters in username";
    // Second Layer, SQL Injection
    if (hasSqlTerms(username) === true)
      errors["username"] = "Your username is not secure, please choose another";
    if (hasSqlTerms(password) === true)
      errors["password"] = "Your password is not secure, please choose another";
  } else if (req.path === "/signin") {
    if (username.length === 0) errors["username"] = "Username can not be empty";
    if (password.length === 0) errors["password"] = "Password can not be empty";
    if (hasSpecChar(username) === true)
      errors["username"] = "Do not use special characters in username";
    if (hasSqlTerms(username) === true)
      errors["username"] = "Your username is not secure, please choose another";
    if (hasSqlTerms(password) === true)
      errors["password"] = "Your password is not secure, please choose another";
  }

  if (Object.values(errors).length > 0) {
    return res.status(401).json({ errors: errors });
  }

  next();
}

module.exports = {
  authenticateToken,
  isValidInfo,
};
