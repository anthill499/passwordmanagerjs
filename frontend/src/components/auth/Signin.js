import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/Contexts";
import { useNavigate } from "react-router";
import "../../styles/auth.css";

const Signin = () => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [backendErrors, setbackendErrors] = useState([]);
  const [spinner, setspinner] = useState(false);
  const authGlobal = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSignin = async (
    e,
    data = { username: username, password: password }
  ) => {
    e.preventDefault();
    setspinner(true);
    try {
      const response = await fetch("/api/auth/signin", {
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
      setspinner(false);
    } catch (err) {
      // console.error(err);
      throw err;
    }
  };

  return (
    <div className="Auth-Form">
      <h4>
        {!backendErrors?.errors?.global
          ? "Sign in to your account!"
          : backendErrors?.errors?.global}{" "}
      </h4>
      {spinner && (
        <div className="lds-roller">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      )}
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
          placeholder="Enter your username"
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
          placeholder="Enter your password"
          style={{
            outlineColor: backendErrors?.errors?.password ? "red" : null,
          }}
          className={backendErrors?.errors?.password ? "Auth-Input" : null}
        />
        <div className="Auth-Button-Group">
          <button onClick={(e) => handleSignin(e)}>Sign In</button>
          <button onClick={() => navigate("/signup", { replace: true })}>
            Don't have an account?
          </button>
          <button
            onClick={(e) =>
              handleSignin(e, {
                username: "anthill499",
                password: "passwordQ!1",
              })
            }
          >
            Demo User
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signin;
