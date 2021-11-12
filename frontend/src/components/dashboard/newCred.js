import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/Contexts";
import passwordGenerator from "../../util/passwordGenerator";
import "../../styles/dash.css";
import "../../styles/global.css";

const CredentialForm = ({ modalOpen, setmodalOpen }) => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [strength, setStrength] = useState(10);
  const [company, setcompany] = useState("");
  const [clipMessage, setclipMessage] = useState(null);
  const [backendErrors, setbackendErrors] = useState(null);
  const authGlobal = useContext(AuthContext);

  const dictionary = {
    10: <span style={{ color: "red" }}>Weak</span>,
    20: <span style={{ color: "#ff7b00" }}>Good</span>,
    30: <span style={{ color: "green" }}>Strong</span>,
    40: <span style={{ color: "#1ac703" }}>Very Strong</span>,
  };

  const rerollPassword = (e, count) => {
    e.preventDefault();
    const newPw = passwordGenerator(count);
    console.log(newPw);
    return setpassword(newPw);
  };

  // Clipboard message handler
  const handleClipboard = () => {
    navigator.clipboard.writeText(password);
    setclipMessage(
      <span className="Copied">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="16"
          height="16"
          viewBox="0 0 172 172"
          style={{ fill: "#000000" }}
        >
          <g
            fill="none"
            fill-rule="nonzero"
            stroke="none"
            stroke-width="1"
            stroke-linecap="butt"
            stroke-linejoin="miter"
            stroke-miterlimit="10"
            stroke-dasharray=""
            stroke-dashoffset="0"
            font-family="none"
            font-weight="none"
            font-size="none"
            text-anchor="none"
            style={{ mixBlendMode: "normal" }}
          >
            <path d="M0,172v-172h172v172z" fill="none"></path>
            <g fill="#008000">
              <path d="M86,21.5c-35.55872,0 -64.5,28.9413 -64.5,64.5c0,35.55869 28.94128,64.5 64.5,64.5c35.55872,0 64.5,-28.94131 64.5,-64.5c0,-35.5587 -28.94128,-64.5 -64.5,-64.5zM86,32.25c29.749,0 53.75,24.00103 53.75,53.75c0,29.74897 -24.001,53.75 -53.75,53.75c-29.749,0 -53.75,-24.00103 -53.75,-53.75c0,-29.74897 24.001,-53.75 53.75,-53.75zM112.60205,64.5l-33.59375,33.59375l-17.46875,-17.46875l-7.5166,7.5271l24.98535,24.99585l41.12085,-41.12085z"></path>
            </g>
          </g>
        </svg>
        <span> Copied to Clipboard!</span>
      </span>
    );
    setTimeout(() => setclipMessage(null), 5000);
  };

  // Submit Form Handler, POST req
  const handleSubmit = async (
    e,
    url = "/api/cred/new",
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
        // If the response was okay
        console.log(parseResp);
      } else {
        setbackendErrors(Object.values(parseResp.errors));
        console.log(parseResp.errors);
        console.log(backendErrors);
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
        <label htmlFor="company">Company Name</label>
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
        <label htmlFor="password">
          Password {clipMessage && <span>{clipMessage}</span>}
          <img
            src="https://img.icons8.com/material-outlined/24/000000/copy.png"
            alt="clipboard"
            className="Clipboard"
            onClick={() => handleClipboard()}
          />
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
