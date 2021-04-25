import axios from "axios";

const API_URL = "http://localhost:5000/api";

export async function login(data) {
  return axios.post(`${API_URL}/token`, data);
}
