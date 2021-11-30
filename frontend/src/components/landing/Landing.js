import React from "react";
import "../../styles/landing.css";
import Navbar from "../navbar/Navbar";
import mySvg from "../../assets/images/undraw.png";
const Landing = () => {
  return (
    <>
      <Navbar />
      <div className="Landing-Container">
        <div className="heading">
          <h1>Never forget a password. Ever again</h1>
          <p>Store your passwords and access them anytime</p>
        </div>
        <img
          src={mySvg}
          alt="png"
          className="landing-png"
          type="image/png"
        ></img>
      </div>
    </>
  );
};

export default Landing;
