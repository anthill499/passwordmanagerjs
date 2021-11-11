// import React, { useContext } from "react";
// import { Route, Redirect } from "react-router-dom";
// import { AuthContext } from "./context";

// export function PrivateRoute({ component: Component, ...rest }) {
//   const authGlobal = useContext(AuthContext);
//   return (
//     <Route
//       {...rest}
//       render={(props) =>
//         authGlobal.authState ? <Component {...props} /> : <Redirect to="/" />
//       }
//     />
//   );
// }

// export function AuthRoute({ component: Component, ...rest }) {
//   const authGlobal = useContext(AuthContext);
//   return (
//     <Route
//       {...rest}
//       render={(props) =>
//         !authGlobal.authState ? (
//           <Component {...props} />
//         ) : (
//           <Redirect to="/landing" />
//         )
//       }
//     />
//   );
// }
