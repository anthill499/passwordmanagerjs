import React, { useReducer } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./components/landing/Landing";
import Signup from "./components/auth/Signup";
import Signin from "./components/auth/Signin";
import Dashboard from "./components/dashboard/Dashboard";
import { AuthContext } from "./context/Contexts";
import { PrivateRoute, AuthRoute } from "./util/RouteUtil";
import { AuthReducer, initialState } from "./store/reducers/authReducer";
import { login, logout } from "./store/actions/AuthActions";

function App() {
  const [stateAuthReducer, dispatchAuthReducer] = useReducer(
    AuthReducer,
    initialState
  );
  return (
    <AuthContext.Provider
      value={{
        ...stateAuthReducer,
        login: (data) => dispatchAuthReducer(login(data)),
        logout: () => dispatchAuthReducer(logout()),
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoute redirectTo="/signin">
                <Landing />
              </PrivateRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute redirectTo="/signin">
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/signup"
            element={
              <AuthRoute redirectTo="/dashboard">
                <Signup />
              </AuthRoute>
            }
          />
          <Route
            path="/signin"
            element={
              <AuthRoute redirectTo="/dashboard">
                <Signin />
              </AuthRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
