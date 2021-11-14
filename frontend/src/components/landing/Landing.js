import React from "react";
import "../../styles/landing.css";
import { useNavigate } from "react-router";
const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="Landing-Container">
      <h1 class="typing-demo">Hello, welcome to PasswordManager </h1>
      <button
        className="Landing-Button"
        onClick={() => navigate("/signin", { replace: false })}
      >
        🚀 Let's get started
      </button>
      <div className="Landing-Buttons">
        <a
          href="https://www.linkedin.com/in/anthonyhuang499"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
            alt="linkedin"
            style={{ height: "45px", width: "45px" }}
          />
        </a>
        <a
          href="https://github.com/anthill499/passwordmanagerjs"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
            alt="git"
            style={{ height: "45px", width: "45px" }}
          />
        </a>
        <a
          href="https://www.anthonyhuang.dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://img.icons8.com/color-glass/48/000000/code.png"
            alt="personal"
            style={{ height: "45px", width: "45px" }}
          />
        </a>
      </div>
    </div>
  );
};

export default Landing;
