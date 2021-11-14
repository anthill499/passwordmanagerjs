import React, { useState, useContext } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../../context/Contexts";
import "../../styles/auth.css";
import "../../styles/global.css";
// Sign up form
const Signup = () => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [backendErrors, setbackendErrors] = useState(null);

  const navigate = useNavigate();

  // Context
  const authGlobal = useContext(AuthContext);
  const handleSignup = async (
    e,
    url = "/api/auth/signup",
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
      if (response.ok) {
        authGlobal.login(parseResp);
        localStorage.setItem("user", JSON.stringify(parseResp));
      } else {
        setbackendErrors(parseResp);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="Auth-Form">
      <h4>
        {!backendErrors?.errors?.global
          ? "Get started today!"
          : backendErrors?.errors?.global}{" "}
      </h4>
      <form>
        <label
          htmlFor="username"
          style={{
            color: backendErrors?.errors?.username ? "red" : null,
          }}
        >
          {!backendErrors?.errors?.username
            ? "Enter a Username"
            : backendErrors?.errors?.username}
        </label>
        <input
          name="username"
          value={username}
          onChange={(e) => setusername(e.currentTarget.value)}
          placeholder="Enter a username"
          style={{
            outlineColor: backendErrors?.errors?.username ? "red" : null,
          }}
          className={backendErrors?.errors?.username ? "Auth-Input" : null}
        />

        <label
          htmlFor="password"
          style={{
            color: backendErrors?.errors?.password ? "red" : null,
          }}
        >
          {" "}
          {!backendErrors?.errors?.password
            ? "Enter a Password"
            : backendErrors?.errors?.password}
        </label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setpassword(e.currentTarget.value)}
          placeholder="Enter a strong password"
          style={{
            outlineColor: backendErrors?.errors?.password ? "red" : null,
          }}
          className={backendErrors?.errors?.password ? "Auth-Input" : null}
        />

        <div className="Auth-Button-Group">
          <button onClick={(e) => handleSignup(e)}>Create Account</button>
          <button onClick={() => navigate("/signin", { replace: true })}>
            Already have an account?
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
