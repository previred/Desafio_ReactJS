import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RequestEnum } from "src/models/api";
import { UIHeader, UIMessage } from "src/modules/components/ui";
import { newEmployee, setRequestApi } from "src/redux/reducers";
import { RequestSelector } from "src/redux/store";

interface SearchProps {
  title: string;
  searchEmployee: boolean;
}
const EmployeeSearch: React.FC<SearchProps> = ({
  children,
  title,
  searchEmployee,
}) => {
  const dispatch = useDispatch();
  const { name } = useSelector(RequestSelector);

  return (
    <>
      <UIHeader
        title={title}
        onSearch={(employeeId) => {
          dispatch(newEmployee());
          if (employeeId) {
            dispatch(
              setRequestApi({
                name: RequestEnum.SearchEmployee,
                params: { employeeId },
              })
            );
          }
        }}
        typeSearch="number"
      />
      {searchEmployee ? (
        <div>{children}</div>
      ) : (
        <UIMessage
          title={
            name === RequestEnum.SearchEmployee
              ? "Buscando empleado..."
              : "Sin resultados"
          }
          description={
            name === RequestEnum.SearchEmployee
              ? "Obteniendo resultados"
              : "Ingrese el id del colaborador a buscar"
          }
          isLoading={name === RequestEnum.SearchEmployee}
        />
      )}
    </>
  );
};

export { EmployeeSearch };
