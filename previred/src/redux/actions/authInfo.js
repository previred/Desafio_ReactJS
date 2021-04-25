import { SET_AUTH_INFO } from "../constants/actionTypes";

function setAuthInfo(data) {
  return {
    type: SET_AUTH_INFO,
    payload: data,
  };
}

export { setAuthInfo };
