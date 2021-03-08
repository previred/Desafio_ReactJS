import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNotify } from "src/hooks";
import { useCreateUpdateEmployee } from "src/hooks/UseCreateUpdateEmployee";
import { RequestEnum } from "src/models/api";
import { setRequestApi } from "src/redux/reducers";
import { AuthSelector } from "src/redux/store";
import { EmployeeDetail } from "../detail/Detail";
import { EmployeeSearch } from "../search/Search";

const EmployeeDelete: React.FC = () => {
  const dispatch = useDispatch();
  const { employeeSearch } = useCreateUpdateEmployee();
  const { notify } = useNotify();
  const { employee } = useSelector(AuthSelector);
  const handleDelete = (employeeId: number) => {
    if (employeeId !== employee?.idEmployee) {
      dispatch(
        setRequestApi({
          name: RequestEnum.RemoveEmploye,
          params: { employeeId },
        })
      );
    } else {
      notify("No puedes borrar tu mismo usuario", "warning");
    }
  };
  return (
    <EmployeeSearch
      searchEmployee={!!employeeSearch.idEmployee}
      title="Borrar Empleado"
    >
      <EmployeeDetail
        employee={employeeSearch}
        onDelete={handleDelete}
      />
    </EmployeeSearch>
  );
};

export { EmployeeDelete };
