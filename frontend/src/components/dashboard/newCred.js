import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/Contexts";
import "../../styles/dash.css";
import passwordGenerator from "../../util/passwordGenerator";
const CredentialForm = () => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [strength, setStrength] = useState(10);
  const [company, setcompany] = useState("");
  const authGlobal = useContext(AuthContext);

  const rerollPassword = (e, count) => {
    e.preventDefault();
    const newPw = passwordGenerator(count);
    console.log(newPw);
    return setpassword(newPw);
  };

  // Create a post request to create
  return (
    <div className="Credential-Form-Container">
      <h4 className="Credential-Header">Create a new Credential</h4>
      <form className="Credential-Form">
        <label htmlFor="company">What Website?</label>
        <input
          name="company"
          value={company}
          onChange={(e) => setcompany(e.currentTarget.value)}
          placeholder="Enter a Company Name"
        />
        <label htmlFor="username">Username</label>
        <input
          name="username"
          value={username}
          onChange={(e) => setusername(e.currentTarget.value)}
          placeholder="Pick a username"
        />
        <label htmlFor="password">Password</label>
        <input
          name="password"
          value={password}
          onChange={(e) => setpassword(e.currentTarget.value)}
          placeholder="Generate a Password"
          readOnly={true}
        />
        <label>Password Strength</label>
        <div className="radio">
          <label>
            <input
              type="radio"
              value={5}
              onChange={(e) => setStrength(e.currentTarget.value)}
            />
            Weak
          </label>
          <label>
            <input
              type="radio"
              value={10}
              onChange={(e) => setStrength(e.currentTarget.value)}
            />
            Good
          </label>

          <label>
            <input
              type="radio"
              value={15}
              onChange={(e) => setStrength(e.currentTarget.value)}
            />
            Strong
          </label>

          <label>
            <input
              type="radio"
              value={25}
              onChange={(e) => setStrength(e.currentTarget.value)}
            />
            Very Strong
          </label>
        </div>

        <button onClick={(e) => rerollPassword(e, strength)}>
          Generate Random Password
        </button>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CredentialForm;
