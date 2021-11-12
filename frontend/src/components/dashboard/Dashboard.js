import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/Contexts";
import "../../styles/dash.css";
import CredentialForm from "./newCred";
const Dashboard = () => {
  const [modalOpen, setmodalOpen] = useState(false);
  const authGlobal = useContext(AuthContext);
  const handleModalKey = (e) => {
    if (e.key === "Escape") {
      if (!modalOpen) return;
      setmodalOpen(!modalOpen);
    }
  };

  return (
    <>
      {modalOpen && (
        <CredentialForm modalOpen={modalOpen} setmodalOpen={setmodalOpen} />
      )}
      <div className="Dashboard-Container" onKeyUp={(e) => handleModalKey(e)}>
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
