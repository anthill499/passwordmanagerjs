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
const SIA_KEYWORDS = [
  "drop",
  "DROP",
  "FROM",
  "from",
  "*",
  "select",
  "SELECT",
  "ASCII",
  "ascii",
  "UNION",
  "union",
  "field",
  "FIELD",
  "COLLATE",
  "collate",
  "sql",
  "SQL",
  "admin",
  "ADMIN",
  "admin",
  "1=1",
  "MD5",
  "GROUP BY",
  "group by",
  "having",
  "HAVING",
  "table",
  "TABLE",
  "*",
  "bypass",
  "blacklisting",
  ";",
  "INSERT",
  "insert",
  "EXEC",
  "exec",
  "RECONFIGURE",
  "reconfigure",
  "ISNULL",
  "isnull",
  "SUBSTRING",
  "substring",
  "WHEN",
  "SCHEMA",
  "schema",
  "VERSION",
  "version",
  "CONCAT",
  "concat",
];

const specChar = "#$%&'()*+,-./:;<=>?@[]^_`{|}~ ";

const hasSpecChar = (word) => {
  for (let i = 0; i < word.length; i++) {
    if (specChar.indexOf(word[i]) !== -1) return true;
  }
  return false;
};

const hasSqlTerms = (string) => {
  const filtered = SIA_KEYWORDS.filter((term) => string.indexOf(term) !== -1);
  return filtered.length >= 2 ? true : false;
};

module.exports = {
  hasSpecChar,
  hasSqlTerms,
};
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

### Problem: ```Proxy error: Could not proxy request URL from localhost:3000 to http://localhost:5000/ ECONNREFUSED```
- Added ```--ignore``` to the backend ```package.json``` script for ```server```

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

### SQL Database
- Write better database queries to further prevent SQL injections
- Implement a strong middleware to stop possible threats at frontend
