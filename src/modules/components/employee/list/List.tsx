import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RequestEnum } from "src/models/api";
import { Column } from "src/models/ui";
import { User } from "src/models/user";
import { UIHeader, UIMessage, UITable } from "src/modules/components/ui";
import { setRequestApi } from "src/redux/reducers";
import { RequestSelector, UserSelector } from "src/redux/store";

const EmployeeList: React.FC = () => {
  const dispatch = useDispatch();
  const { users } = useSelector(UserSelector);
  const { name } = useSelector(RequestSelector);
  const columns: Column<User>[] = [
    {
      key: "name",
      label: "Nombre",
      render: ({ name, surname }) => `${name} ${surname}`,
    },
    {
      key: "Rut",
      label: "Rut",
      render: ({ rut, dv }) => `${rut}-${dv}`,
    },
    {
      key: "email",
      label: "Email",
      render: ({ email }) => email,
    },
    {
      key: "departament",
      label: "Departamento",
      render: ({ department }) => department?.description || "",
    },
    {
      key: "isAdmin",
      label: "Tipo",
      render: ({ isAdm }) => isAdm? "Administrador" : "Usuario",
    },
  ];

  useEffect(() => {
    dispatch(
      setRequestApi({
        name: RequestEnum.GetAllEmployee,
      })
    );
  }, []);

  return (
    <>
      <UIHeader title="Listado de empleados" />
      {name === RequestEnum.GetAllEmployee ? (
        <UIMessage
          isLoading
          title="Buscando ..."
          description="Busqueda en proceso, por favor espere unos instantes"
        />
      ) : (
        <UITable<User> columns={columns} rows={users} />
      )}
    </>
  );
};

export { EmployeeList };
