import React, { useContext, useState, useEffect, Fragment } from "react";
import { AuthContext } from "../../context/Contexts";
import "../../styles/dash.css";
import CredentialForm from "./newCred";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";

const Dashboard = () => {
  const [modalOpen, setmodalOpen] = useState(false);
  const [creds, setCreds] = useState(null);
  const authGlobal = useContext(AuthContext);
  
  const dictionary = {
    1: <span style={{ color: "red" }}>Weak</span>,
    2: <span style={{ color: "#ff7b00" }}>Good</span>,
    3: <span style={{ color: "green" }}>Strong</span>,
    4: <span style={{ color: "#1ac703" }}>Very Strong</span>,
  };

  useEffect(() => {
    const fetchUserCreds = async () => {
      try {
        const response = await fetch(`/api/cred/${authGlobal.id}`);
        const parseResp = await response.json();
        if (response.ok) {
          setCreds(parseResp);
        }
      } catch (err) {
        console.error(err.message);
      }
    };
    fetchUserCreds();
  }, [authGlobal]);

  if (!creds)
    return (
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );

  const handleModalKey = (e) => {
    if (e.key === "Escape") {
      if (!modalOpen) return;
      setmodalOpen(!modalOpen);
    }
  };

  return (
    <Fragment>
      {modalOpen && (
        <CredentialForm
          modalOpen={modalOpen}
          setmodalOpen={setmodalOpen}
          setCreds={setCreds}
          creds={creds}
        />
      )}
      <div className="Dashboard-Container" onKeyUp={(e) => handleModalKey(e)}>
        <h4>{authGlobal.username}'s Dashboard</h4>
        <div className="Dashboard-Buttons">
          <button
            className="Cred-Button"
            onClick={() => setmodalOpen(!modalOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              style={{ fill: "#000000", margin: "auto" }}
            >
              <path
                fillRule="evenodd"
                d="M 11 2 L 11 11 L 2 11 L 2 13 L 11 13 L 11 22 L 13 22 L 13 13 L 22 13 L 22 11 L 13 11 L 13 2 Z"
              ></path>
            </svg>
          </button>
        </div>
        {creds?.length === 0 ? (
          <h3 id="First-Cred">Create Your First Credential!</h3>
        ) : (
          <div className="Dashboard-Map">
            <div className="Dashboard-Title">
              <div>
                <h3>Company Name</h3>
                <ul className="Cred-List">
                  {creds?.map((cred, i) => (
                    <li className="Cred-List-Input" key={i}>
                      {cred.company_name}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3>Username</h3>
                <ul className="Cred-List">
                  {creds?.map((cred, i) => (
                    <li className="Cred-List-Input" key={i}>
                      {cred.username}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3>Your Password</h3>
                <ul className="Cred-List">
                  {creds?.map((cred, i) => (
                    <li className="Cred-List-Input" key={i}>
                      {cred.pw}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3>Password Strength</h3>
                <ul className="Cred-List">
                  {creds?.map((cred, i) => (
                    <li className="Cred-List-Input" key={i}>
                      {dictionary[cred.strength]}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3>Removed</h3>
                <ul className="Cred-List Class" style={{ textAlign: "center" }}>
                  {creds?.map((cred, i) => {
                    const removedStatus = cred.removed.toString();
                    return (
                      <li className="Cred-List-Input" key={i}>
                        {removedStatus === "true" ? (
                          <CheckCircleIcon
                            style={{
                              color: "green",
                              fontSize: "small",
                              textAlign: "center",
                            }}
                          />
                        ) : (
                          <RadioButtonUncheckedIcon
                            style={{
                              color: "#b90000",
                              fontSize: "small",
                              textAlign: "center",
                            }}
                          />
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default Dashboard;
