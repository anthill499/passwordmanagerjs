async function isValidCred(req, res, next) {
  const errors = {};
  const { username, newPassword, companyName } = await req.body;

  if (req.path === "/new") {
    if (username.length === 0) {
      errors["username"] = "Username can not be empty";
    } else if (username.length < 8 && username.length !== 0) {
      errors["username"] = "Username is too short. Choose 8 characters";
    }

    if (companyName.length === 0) {
      errors["company"] = "Company Name can not be empty";
    }
  }

  if (Object.values(errors).length > 0) {
    return res.status(401).json({ errors: errors });
  }

  next();
}

module.exports = isValidCred;
