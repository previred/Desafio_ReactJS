import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RequestEnum } from "src/models/api";
import { Departament } from "src/models/departament";
import { User } from "src/models/user";
import { newEmployee, setRequestApi } from "src/redux/reducers";
import { UserSelector, DepartamentSelector } from "src/redux/store";

interface CreateUpdate {
  departaments: Departament[];
  employeeSearch: User;
  employeeNew: User
  users: User[]
}

const useCreateUpdateEmployee = (): CreateUpdate => {
  const dispatch = useDispatch();
  const { employeeSearch, users } = useSelector(UserSelector);
  const { departaments } = useSelector(DepartamentSelector);
  const employeeNew: User = {
    idEmployee: null,
    rut: "",
    password: "",
    surname: "",
    dv: "",
    name: "",
    email: "",
    department: { description: "", idDept: null },
    isAdm: false,
  };
  useEffect(() => {
    if (!departaments.length) {
      dispatch(
        setRequestApi({
          name: RequestEnum.GetAllDepartament,
        })
      );
    }
    return () => {
      dispatch(newEmployee());
    };
  }, []);

  return {
    departaments,
    employeeSearch,
    employeeNew,
    users
  };
};

export { useCreateUpdateEmployee };
