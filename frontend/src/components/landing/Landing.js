import React from "react";
import "../../styles/landing.css";
import { useNavigate } from "react-router";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="Landing-Container">
      <h1 class="typing-demo">Hello, welcome to PasswordManager</h1>
      <button onClick={() => navigate("/signin", { replace: false })}>
      🚀 Let's get started
      </button>
    </div>
  );
};

export default Landing;
