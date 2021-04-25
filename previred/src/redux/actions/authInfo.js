import { SET_AUTH_INFO, REMOVE_AUTH_INFO } from "../constants/actionTypes";

function setAuthInfo(data) {
  return {
    type: SET_AUTH_INFO,
    payload: data,
  };
}

function removeAuthInfo() {
  return {
    type: REMOVE_AUTH_INFO,
  };
}

export { setAuthInfo, removeAuthInfo };
