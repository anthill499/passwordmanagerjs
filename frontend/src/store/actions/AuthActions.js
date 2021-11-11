import * as ACTION_TYPE from "./types";

export const login = (data) => {
  return {
    type: ACTION_TYPE.LOGIN,
    username: data.username,
    token: data.token,
    email: data.email,
    id: data.id,
  };
};

export const logout = () => {
  return {
    type: ACTION_TYPE.LOGOUT,
  };
};
