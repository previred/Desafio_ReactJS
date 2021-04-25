import { previredAxios } from "../utils/token";

const API_URL = "http://localhost:5000/api";

export async function getEmployees() {
  return previredAxios.get(`${API_URL}/employees`);
}
