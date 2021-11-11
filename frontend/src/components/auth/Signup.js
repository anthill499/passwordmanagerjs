import React, { useState } from "react";
// Sign up form
const Signup = () => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  return (
    <div>
      <h4>Get started today!</h4>
      <form>
        <input
          name="username"
          value={username}
          onChange={(e) => setusername(e.currentTarget.value)}
        />
        <input
          name="password"
          value={password}
          onChange={(e) => setpassword(e.currentTarget.value)}
        />
      </form>
    </div>
  );
};

export default Signup;
