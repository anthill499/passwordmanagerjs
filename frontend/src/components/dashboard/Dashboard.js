import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/Contexts";
import "../../styles/dash.css";
import CredentialForm from "./newCred";
const Dashboard = () => {
  const [modalOpen, setmodalOpen] = useState(false);
  const authGlobal = useContext(AuthContext);
  return (
    <>
      {modalOpen && <CredentialForm />}
      <div className="Dashboard-Container">
        <h4>Dashboard Route</h4>
        <button onClick={() => setmodalOpen(!modalOpen)}>
          Create a new cred
        </button>
        <div className="Dashboard-Map">
          <div>Mapped Products</div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
