import React, { useContext } from "react";
import "../../styles/heading.css";
import { AuthContext } from "../../context/Contexts";

const Heading = () => {
  const authGlobal = useContext(AuthContext);
  return (
    <div className="Heading-Container">
      <div>Hey, {authGlobal.username}!</div>
      <button onClick={() => authGlobal.logout()}>Log Out</button>
    </div>
  );
};

export default Heading;
