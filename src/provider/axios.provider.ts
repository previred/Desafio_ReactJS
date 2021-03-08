import axios from "axios";
import { authService } from "src/commons";
import { expireJwt,getJwt } from "src/helpers";

const apiurl = "http://localhost:5000/";

const axiosInstance = axios.create({
  baseURL: apiurl,
  headers: {
    ...authService.getAuthHeaders(),
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("g-recaptcha-token");
    const jwt = getJwt();

    if (token) {
      config.headers["g-recaptcha"] = token;
      localStorage.removeItem("g-recaptcha-token");
    }

    if (!expireJwt()) config.headers["Authorization"] = `Bearer ${jwt}`;

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export { axiosInstance };
