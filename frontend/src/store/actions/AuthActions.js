import * as ACTION_TYPE from "./types";

export const login = (data) => {
  return {
    type: ACTION_TYPE.LOGIN,
    username: data.username,
    token: data.token,
    id: data.id,
  };
};

export const logout = () => {
  localStorage.removeItem("user");
  return {
    type: ACTION_TYPE.LOGOUT,
  };
};
