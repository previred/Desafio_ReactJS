import { previredAxios } from "../utils/token";

const API_URL = "http://localhost:5000/api";

export async function getDepartments() {
  return previredAxios.get(`${API_URL}/departments`);
}
