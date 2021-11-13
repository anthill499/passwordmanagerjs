import React from "react";

const Credential = ({ cred }) => {
  return (
    <div className="Cred-Row">
      <div>{cred.company_name}</div>
      <div>{cred.pw}</div>
      <div>{cred.removed.toString()}</div>
    </div>
  );
};

export default Credential;
