import Cookies from "js-cookie";

const getCookie = (cname: string) => {
  return Cookies.getJSON(cname);
};

const setCookie = (name: string, value: string) => {
  Cookies.set(name, value);
};

export { getCookie, setCookie };
