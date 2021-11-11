import React, { useContext } from "react";
import { AuthContext } from "../../context/Contexts";

const Dashboard = () => {
  const authGlobal = useContext(AuthContext);
  return (
    <div>
      <p>Dashboard Route</p>
      <button onClick={() => authGlobal.logout()}>Log Out</button>
    </div>
  );
};

export default Dashboard;
