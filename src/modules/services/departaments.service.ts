import { http } from "src/provider";
import { Departament } from "src/models/departament";

const baseUrl = "/api/departments";

const getAllDepartamentService = async (): Promise<Departament[]> => {
  try {
    const {data} = await http.get(baseUrl);
    return data;
  } catch (e) {
    throw new Error(e);
  }
};

export { getAllDepartamentService };
