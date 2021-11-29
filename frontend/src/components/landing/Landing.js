import React from "react";
import "../../styles/landing.css";
import Navbar from "../navbar/Navbar";
const Landing = () => {
  return (
    <>
      <Navbar />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox="0 0 1600 800"
        className="landing-svg"
      >
        <rect fill="#000000" width="1600" height="800" />
        <g>
          <polygon
            fill="#222222"
            points="800 100 0 200 0 800 1600 800 1600 200"
          />
          <polygon
            fill="#444444"
            points="800 200 0 400 0 800 1600 800 1600 400"
          />
          <polygon
            fill="#666666"
            points="800 300 0 600 0 800 1600 800 1600 600"
          />
          <polygon fill="#888888" points="1600 800 800 400 0 800" />
          <polygon fill="#aaaaaa" points="1280 800 800 500 320 800" />
          <polygon fill="#cccccc" points="533.3 800 1066.7 800 800 600" />
          <polygon fill="#EEE" points="684.1 800 914.3 800 800 700" />
        </g>
      </svg>
      <div className="clip"></div>
      <div className="Landing-Container">
        <div>
          <h1>Never forget a password. Ever again</h1>
          <p>Store your passwords and access them anytime</p>
        </div>
      </div>
    </>
  );
};

export default Landing;
