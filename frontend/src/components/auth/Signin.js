import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/Contexts";
import { useNavigate } from "react-router";
import "../../styles/global.css";
import "../../styles/auth.css";

const Signin = () => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [backendErrors, setbackendErrors] = useState([]);
  const authGlobal = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSignin = async (
    e,
    url = "/api/auth/signin",
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
      console.log(response.ok);
      const parseResp = await response.json();
      if (response.ok) {
        authGlobal.login(parseResp);
        localStorage.setItem("user", JSON.stringify(parseResp));
      } else {
        setbackendErrors(Object.values(parseResp.errors));
        console.log(parseResp.errors);
      }
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
          className={backendErrors?.length >= 1 ? "Auth-Input" : null}
          style={{
            outlineColor: backendErrors?.length >= 1 ? "red" : null,
          }}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setpassword(e.currentTarget.value)}
          placeholder="Enter your password"
          className={backendErrors?.length >= 1 ? "Auth-Input" : null}
          style={{
            outlineColor: backendErrors?.length >= 1 ? "red" : null,
          }}
        />
        <div className="Auth-Button-Group">
          <button onClick={(e) => handleSignin(e)}>Sign In</button>
          <button onClick={() => navigate("/signup", { replace: true })}>
            Don't have an account?
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signin;
