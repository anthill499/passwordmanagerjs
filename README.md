# Welcome to 🗝️PasswordManager !

**PasswordManager** is a credentials management platform where logged-in users can save their login credentials
and generate random passwords based on strength.

## ⚙️ Technologies Used

- **JavaScript**
  - React (Hooks)
  - Node.js
  - Express.js
  - BCrypt.js
- **PostgreSQL** as SQL Database
- HTML/CSS/JavaScript
- **Heroku** as deployment platform
- Additional Modules/Libraries
  - uuid
  - jsonwebtoken
  - Material UI Icons
  - React Router

## 🔗 Functionality/MVP

1. User Authentication/Authorization

- A user should be able to create an account
- A user should be able to sign in to an existing account
- A logged-in user should be bootstrapped using localStorage
- A user's API endpoints, should be validated using **jsonwebtoken** in Express.js middleware

2. Credentials

- A logged-in user should be able to generate a random password based on password strength
- A logged-in user should be able to click and choose password strength
- A logged-in user should be able to see their own created credentials on the dashboard

## 🤖 Favorite Code Snippet

```javascript
const ASCII =
  "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!#$%&'()*+,-./:;<=>?@[]^_`{|}~ ";

const passwordGenerator = (count) => {
  return count <= 20 ? genWeakGood(count) : genStrong(count);
};

const genWeakGood = (count) => {
  let answer = "";
  for (let i = 0; i < count; i++) {
    answer += ASCII[Math.floor(Math.random() * 62)];
  }
  return answer;
};

const genStrong = (count) => {
  let answer = "";
  for (let i = 0; i < count; i++) {
    answer += ASCII[Math.floor(Math.random() * 93)];
  }
  return answer;
};

export default passwordGenerator;
```

```javascript
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
```

## 💪 Challenges Faced/Solutions

### Problem: First exposure to making a full stack application with a SQL Database and a Node.js backend

- Learned to create database schemas, tables, columns with appropriate datatype to integrate into Node.js
- Learned more about environmental variables in connection between Node.js and PostgreSQL
- Implemented own frontend form input validation in user authentication using Express.js middleware

### Problem: Difficulty understanding useEffect React hook

- Learned and implemented optional chaining `?.`, null catches with a spinner as a replacement

### Problem: Knowing whether or not to hold values globally `useContext/useReducer` or locally `useState`.

- Determined whether or not every component requires the information. Specifically, the credentials are only utilized in the dashboard, meaning that only 1 `GET` request is necessary locally and that local state information can be passed into another functional component through props.

## 💡 Future Implementations

### More credential CRUD functionality

- A patch request to update `removed` status on a credential
- A delete request to delete a credential
- A get request to get a specific credential by `author_id` and `entry_id`

### Sorting credentials on dashboard

- Implementing a select dropdown that changes the order in which the credentials appear based on a criteria
- Selecting the sorting method should re-render the screen right away

### Express middleware

- Have a stronger/functioning jsonwebtoken express middleware for actual authentication
- Change the current user authorization middleware to a middleware that resembles a Mongoose validator prior to hitting the API endpoint
