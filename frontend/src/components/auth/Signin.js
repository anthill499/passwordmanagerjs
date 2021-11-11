import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/Contexts";

const Signin = () => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  const authGlobal = useContext(AuthContext);
  const handleSignin = async (
    e,
    url = "/auth/signin",
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
      authGlobal.login(parseResp);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="Auth-Form">
      <h4>Sign in to your account!</h4>
      <form>
        <label htmlFor="username">Username</label>
        <input
          name="username"
          value={username}
          onChange={(e) => setusername(e.currentTarget.value)}
          placeholder="Enter your username"
        />
        <label htmlFor="password">Password</label>
        <input
          name="password"
          value={password}
          onChange={(e) => setpassword(e.currentTarget.value)}
          placeholder="Enter your password"
        />
        <button onClick={(e) => handleSignin(e)}>Sign In</button>
      </form>
    </div>
  );
};

export default Signin;
