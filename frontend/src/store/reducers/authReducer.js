import * as ACTION_TYPE from "./types";

export const initialState = {
  isAuth: false,
  username: "",
  firstName: "",
  lastName: "",
  token: "",
  email: "",
  id: "",
};

export const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPE.LOGIN:
      return {
        isAuth: true,
        username: action.username,
        token: action.token,
        id: action.id,
      };
    case ACTION_TYPE.LOGOUT:
      return {
        isAuth: false,
        username: "",
        token: "",
        id: "",
      };
    default:
      return state;
  }
};
