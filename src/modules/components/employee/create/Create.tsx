import React from "react";
import { useDispatch } from "react-redux";
import { useNotify } from "src/hooks";
import { useCreateUpdateEmployee } from "src/hooks/UseCreateUpdateEmployee";
import { RequestEnum } from "src/models/api";
import { User } from "src/models/user";
import { UIHeader } from "src/modules/components/ui";
import { setRequestApi } from "src/redux/reducers";
import { EmployeeForm } from "../form/Form";

const EmployeeCreate: React.FC = () => {
  const dispatch = useDispatch();
  const { departaments, employeeNew, users } = useCreateUpdateEmployee();
  const {notify} = useNotify()
  const handleCreate = (employee: User) => {
    const findUser = users.find(({ rut }) => rut.toString() === employee.rut);
    if (findUser) {
      notify( "Rut existente, no puede crear usuario con el mismo rut","error")
    } else {
      dispatch(
        setRequestApi({
          name: RequestEnum.AddEmploye,
          params: { employee },
        })
      );
    }
  };

  return (
    <>
      <UIHeader title="Nuevo empleado" />
      <EmployeeForm
        departaments={departaments}
        employee={employeeNew}
        onAction={handleCreate}
        isCreate
      />
    </>
  );
};

export { EmployeeCreate };
