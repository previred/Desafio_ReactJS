import { previredAxios } from "../utils/token";

const API_URL = "http://localhost:5000/api";

export async function getEmployees() {
  return previredAxios.get(`${API_URL}/employees`);
}

export async function deleteEmployees(id) {
  return previredAxios.delete(`${API_URL}/employees/${id}`);
}

export async function saveEmployee(data) {
  return previredAxios.post(`${API_URL}/employees`, data);
}
