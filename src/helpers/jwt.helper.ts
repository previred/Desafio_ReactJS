import jwt from "jwt-decode";

const key: string = "token";

const setJwt = (jwtCode: string) => {
  localStorage.setItem(key, jwtCode);
};

const getJwt = () => {
  return localStorage.getItem(key);
};

const clearJwt = () => {
  return localStorage.setItem(key, "");
};

const decodeJwt = () => {
  const jwtCode = getJwt();
  return jwtCode ? jwt<any>(jwtCode) : null;
};

const expireJwt = () => {
  const jwtCode = decodeJwt();
  const timestamp = Date.now();
  if (!!jwtCode && timestamp > jwtCode.exp * 1000) {
    clearJwt();
    return true;
  }
  return !jwtCode;
};

export { clearJwt, setJwt, getJwt, decodeJwt, expireJwt };
