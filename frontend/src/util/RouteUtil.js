import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/Contexts";

// Protected Routes
export const PrivateRoute = ({ children, redirectTo }) => {
  const authGlobal = useContext(AuthContext);
  return authGlobal.isLoggedIn ? children : <Navigate to={redirectTo} />;
};

// Login, Signup page
export const AuthRoute = ({ children, redirectTo }) => {
  const authGlobal = useContext(AuthContext);
  return !authGlobal.isLoggedIn ? children : <Navigate to={redirectTo} />;
};
