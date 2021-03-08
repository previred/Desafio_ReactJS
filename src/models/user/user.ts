import { Departament } from "src/models/departament";

interface User {
  idEmployee?: number | null;
  name: string;
  surname: string;
  email: string;
  rut: string;
  dv: string;
  department: Departament | null;
  password?: string;
  isAdm: boolean
}

export type { User };
