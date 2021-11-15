const { hasSpecChar, hasSqlTerms } = require("./variables");

async function isValidCred(req, res, next) {
  const errors = {};
  const { username, newPassword, companyName } = await req.body;

  if (req.path === "/new") {
    if (username.length === 0) {
      errors["username"] = "Username can not be empty";
    } else if (username.length < 8 && username.length !== 0) {
      errors["username"] = "Username is too short. Choose 8 characters";
    }
    if (hasSpecChar(username) === true)
      errors["username"] = "Do not use special characters in username";
    if (hasSqlTerms(username) === true)
      errors["username"] = "Your username is not secure, please choose another";

    if (companyName.length === 0)
      errors["company"] = "Company Name can not be empty";
    if (hasSpecChar(companyName) === true)
      errors["company"] = "Company Name can not have special characters";
    if (hasSqlTerms(companyName) === true)
      errors["company"] = "Company Name contains unsafe terms";
    if (newPassword.length === 0)
      errors["password"] = "Please generate a password!";
  }

  if (Object.values(errors).length > 0) {
    return res.status(401).json({ errors: errors });
  }

  next();
}

module.exports = isValidCred;
