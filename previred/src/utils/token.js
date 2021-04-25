import axios from "axios";

let previredAxios = axios.create({
  defaultInterceptors: true,
});

const apiToken = window.localStorage.getItem("token");
previredAxios.defaults.headers.common["Authorization"] = `Bearer ${apiToken}`;

export { previredAxios };
