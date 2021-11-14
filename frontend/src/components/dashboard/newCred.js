import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/Contexts";
import passwordGenerator from "../../util/passwordGenerator";
// import { useLocation } from "react-router";
import "../../styles/dash.css";
import "../../styles/global.css";
import "../../styles/auth.css";

const CredentialForm = ({ modalOpen, setmodalOpen, setCreds, creds }) => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [strength, setStrength] = useState(10);
  const [company, setcompany] = useState("");
  const [clipMessage, setclipMessage] = useState(null);
  const [backendErrors, setbackendErrors] = useState(null);
  const authGlobal = useContext(AuthContext);

  // const location = useLocation();
  const dictionary = {
    10: <span style={{ color: "red" }}>Weak</span>,
    20: <span style={{ color: "#ff7b00" }}>Good</span>,
    30: <span style={{ color: "green" }}>Strong</span>,
    40: <span style={{ color: "#1ac703" }}>Very Strong</span>,
  };

  const strengthDictionary = {
    10: 1,
    20: 2,
    30: 3,
    40: 4,
  };

  const rerollPassword = (e, count) => {
    e.preventDefault();
    const newPw = passwordGenerator(count);
    return setpassword(newPw);
  };

  // Clipboard message handler
  const handleClipboard = () => {
    navigator.clipboard.writeText(password);
    setclipMessage(
      <span className="Copied">
        <span> Copied to Clipboard!</span>
      </span>
    );
    setTimeout(() => setclipMessage(null), 5000);
  };

  // Submit Form Handler, POST req
  const handleSubmit = async (
    e,
    url = "/api/cred/new",
    data = {
      userId: authGlobal.id,
      username: username,
      newPassword: password,
      companyName: company,
      strength: strengthDictionary[strength],
    }
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
        console.log(parseResp);
        console.log(creds);
        const newCreds = await creds.concat(parseResp); // ParseResp is also an array
        setCreds(newCreds);
      } else {
        setbackendErrors(parseResp);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="Credential-Form-Container">
      <img
        src="https://img.icons8.com/color/48/000000/close-window.png"
        alt="close"
        className="close"
        onClick={() => setmodalOpen(!modalOpen)}
      />
      <h4 className="Credential-Header">Create a new Credential</h4>
      <form className="Credential-Form" onSubmit={(e) => handleSubmit(e)}>
        <label
          htmlFor="company"
          style={{ color: backendErrors?.errors?.company ? "red" : null }}
        >
          {!backendErrors?.errors?.company
            ? "Company Name"
            : backendErrors?.errors?.company}
        </label>
        {/* com */}
        <input
          name="company"
          value={company}
          onChange={(e) => setcompany(e.currentTarget.value)}
          placeholder="Enter a Company Name"
          style={{
            outlineColor: backendErrors?.errors?.company ? "red" : null,
            color: backendErrors?.errors?.company ? "red" : null,
          }}
          className={backendErrors?.errors?.company ? "Auth-Input" : null}
        />
        <label
          htmlFor="username"
          style={{ color: backendErrors?.errors?.username ? "red" : null }}
        >
          {" "}
          {!backendErrors?.errors?.username
            ? "Username"
            : backendErrors?.errors?.username}
        </label>
        <input
          name="username"
          value={username}
          onChange={(e) => setusername(e.currentTarget.value)}
          placeholder="Pick a username"
          style={{
            outlineColor: backendErrors?.errors?.username ? "red" : null,
            color: backendErrors?.errors?.username ? "red" : null,
          }}
          className={backendErrors?.errors?.username ? "Auth-Input" : null}
        />
        <label
          htmlFor="password"
          style={{ color: backendErrors?.errors?.password ? "red" : null }}
        >
          {!backendErrors?.errors?.password
            ? "Generate a Password"
            : backendErrors?.errors?.password}{" "}
          {clipMessage && <span>{clipMessage}</span>}
          {password.length > 0 && (
            <img
              src="https://img.icons8.com/material-outlined/24/000000/copy.png"
              alt="clipboard"
              className="Clipboard"
              onClick={() => handleClipboard()}
            />
          )}
        </label>
        <input
          name="password"
          value={password}
          onChange={(e) => setpassword(e.currentTarget.value)}
          placeholder="Generate a Password"
          readOnly={true}
          className="Password-Input Darken-Input"
        />
        <label>Choose a Password Strength! {dictionary[strength]} </label>
        <ul className="Emoji-List">
          <li
            onClick={(e) => {
              setStrength(10);
              rerollPassword(e, 10);
            }}
          >
            😔
          </li>
          <li
            onClick={(e) => {
              setStrength(20);
              rerollPassword(e, 20);
            }}
          >
            😐
          </li>
          <li
            onClick={(e) => {
              setStrength(30);
              rerollPassword(e, 30);
            }}
          >
            🙂
          </li>
          <li
            onClick={(e) => {
              setStrength(40);
              rerollPassword(e, 40);
            }}
          >
            😀
          </li>
        </ul>
        <button onClick={(e) => rerollPassword(e, strength)}>
          Generate Random Password
        </button>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CredentialForm;
