import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/Contexts";
// import "../../styles/auth";
// Sign up form
const Signup = () => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  // Context
  const authGlobal = useContext(AuthContext);
  const handleSignup = async (
    e,
    url = "/auth/signup",
    data = { username: username, password: password }
  ) => {
    e.preventDefault();
    try {
      const response = await fetch(url, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });
      const parseResp = await response.json();
      // Dispatch action;
      authGlobal.login(parseResp);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="Auth-Form">
      <h4>Get started today!</h4>
      <form>
        <label htmlFor="username">Username</label>
        <input
          name="username"
          value={username}
          onChange={(e) => setusername(e.currentTarget.value)}
          placeholder="Enter a username"
        />
        <label htmlFor="password">Password</label>
        <input
          name="password"
          value={password}
          onChange={(e) => setpassword(e.currentTarget.value)}
          placeholder="Enter a password"
        />
        <button onClick={(e) => handleSignup(e)}>Create Account</button>
      </form>
    </div>
  );
};

export default Signup;
