import { http } from "src/provider";
import { Login, Session } from "src/models/auth";

const getLogin = async ({ password, rut }: Login): Promise<Session> => {
  try {
    const { data } = await http.post(`api/token`, {
      rut,
      password,
    });
    return data;
  } catch (e) {
    throw new Error(e);
  }
};

export { getLogin };
