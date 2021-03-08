import React from "react";
import { useDispatch } from "react-redux";
import { useCreateUpdateEmployee } from "src/hooks/UseCreateUpdateEmployee";
import { RequestEnum } from "src/models/api";
import { setRequestApi } from "src/redux/reducers";
import { EmployeeForm } from "../form/Form";
import { EmployeeSearch } from "../search/Search";

const EmployeeUpdate: React.FC = () => {
  const dispatch = useDispatch();
  const { employeeSearch, departaments } = useCreateUpdateEmployee();

  return (
    <EmployeeSearch searchEmployee={!!employeeSearch.idEmployee} title="Actualizar Empleado" >
      <EmployeeForm
        employee={employeeSearch}
        departaments={departaments}
        action="Actualizar"
        onAction={(employee) => {
          dispatch(
            setRequestApi({
              name: RequestEnum.UpdateEmploye,
              params: { employee },
            })
          );
        }}
      />
    </EmployeeSearch>
  );
};

export { EmployeeUpdate };
