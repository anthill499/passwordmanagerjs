// Token Authenticator
const jwt = require("jsonwebtoken");
const keys = require("../config/prodkeys");

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
  // const regex =
  //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/gm;

  // Fill errors hash with errors
  if (req.path === "/signup") {
    if (username.length === 0) {
      errors["username"] = "Username can not be empty";
    } else if (username.length < 8 && username.length !== 0) {
      errors["username"] = "Username is too short. Choose 8 characters";
    }
    // if (!password.match(regex)) {
    //   errors["password"] = "Enter a stronger password";
    // }
    if (password.length === 0) {
      errors["password"] = "Password can not be empty";
    }
  } else if (req.path === "/signin") {
    if (username.length === 0) {
      errors["username"] = "Username can not be empty";
    }
    if (password.length === 0) {
      errors["password"] = "Password can not be empty";
    }
  }

  if (Object.values(errors).length > 0) {
    return res.status(401).json({ errors: errors });
  }

  // return
  next();
}

module.exports = {
  authenticateToken,
  isValidInfo,
};
