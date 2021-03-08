import { http } from "src/provider";
import { User } from "src/models/user";

const baseUrl = "/api/employees";

const getAllEmployeeService = async (): Promise<User[]> => {
  try {
    const { data } = await http.get(baseUrl);
    return data;
  } catch ({ response }) {
    throw response;
  }
};

const getEmployeeService = async (employeeId: number): Promise<User> => {
  try {
    const { data } = await http.get(`${baseUrl}/${employeeId}`);
    return data;
  } catch ({ response }) {
    throw response;
  }
};

const createEmployeService = async (employee: User) => {
  try {
    const { data } = await http.post(baseUrl, { ...employee });
    return data;
  } catch ({ response }) {
    throw response;
  }
};

const updateEmployeService = async (employee: User) => {
  try {
    const { data } = await http.put(`${baseUrl}/${employee.idEmployee}`, {
      ...employee,
    });
    return data;
  } catch ({ response }) {
    throw response;
  }
};

const removeEmployeService = async (employeeId: number): Promise<User> => {
  try {
    const { data } = await http.delete(`${baseUrl}/${employeeId}`);
    return data;
  } catch ({ response }) {
    throw new Error(response);
  }
};

export {
  getAllEmployeeService,
  createEmployeService,
  getEmployeeService,
  updateEmployeService,
  removeEmployeService
};
