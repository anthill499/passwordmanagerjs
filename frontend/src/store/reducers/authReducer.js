import * as ACTION_TYPE from "../actions/types";

export const initialState = {
  isLoggedIn: false,
  username: "",
  token: "",
  id: "",
};

export const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPE.LOGIN:
      return {
        isLoggedIn: true,
        username: action.username,
        token: action.token,
        id: action.id,
      };
    case ACTION_TYPE.LOGOUT:
      return {
        isLoggedIn: false,
        username: "",
        token: "",
        id: "",
      };
    default:
      return state;
  }
};
