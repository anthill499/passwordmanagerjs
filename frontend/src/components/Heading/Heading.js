import React, { useContext } from "react";
import "../../styles/heading.css";
import { AuthContext } from "../../context/Contexts";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonIcon from "@mui/icons-material/Person";
import TimelineIcon from "@mui/icons-material/Timeline";

const Heading = () => {
  const authGlobal = useContext(AuthContext);
  return (
    <div className="Heading-Container">
      <div>🗝️PasswordManager</div>
      <div className="Button-Group">
        <PersonIcon className="Heading-Button" />
        <TimelineIcon className="Heading-Button" />
        <LogoutIcon
          onClick={() => authGlobal.logout()}
          className="Heading-Button"
        />
      </div>
    </div>
  );
};

export default Heading;
