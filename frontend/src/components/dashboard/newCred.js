import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/Contexts";
import "../../styles/dash.css";
import passwordGenerator from "../../util/passwordGenerator";
const CredentialForm = () => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const authGlobal = useContext(AuthContext);

  const rerollPassword = () => {
    return setpassword(passwordGenerator());
  };
  // Create a post request to create
  return (
    <div className="Credential-Form-Container">
      <h4>Create a new Credential</h4>
      <form className="Credential-Form">
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
          placeholder="Enter a Password"
        />
        <button onClick={() => rerollPassword()}>
          Generate Random Password
        </button>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default CredentialForm;
