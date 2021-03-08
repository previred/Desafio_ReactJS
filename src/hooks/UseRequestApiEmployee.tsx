import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RequestEnum } from "src/models/api";
import { User } from "src/models/user";
import {
  setRequestApi,
  setUsers,
  setEmployee,
  setDepartaments,
  newEmployee,
} from "src/redux/reducers";
import { RequestSelector } from "src/redux/store";
import {
  createEmployeService,
  getAllEmployeeService,
  getEmployeeService,
  updateEmployeService,
  removeEmployeService,
} from "src/modules/services/employee.service";
import { useNotify } from "./UseNotify";
import { Departament } from "src/models/departament";
import { getAllDepartamentService } from "src/modules/services";

const useRequestApiEmployee = () => {
  const dispatch = useDispatch();
  const { httpNotify, notify } = useNotify();
  const { numberRequest, name, params } = useSelector(RequestSelector);

  useEffect(() => {
    if (name !== RequestEnum.NotRequest) {
      onRequest();
    }
  }, [numberRequest]);

  const noRequest = () => {
    dispatch(
      setRequestApi({
        name: RequestEnum.NotRequest,
      })
    );
  };

  const onRequest = () => {
    switch (name) {
      case RequestEnum.GetAllEmployee: {
        getAllEmployeeService()
          .then((res: User[]) => {
            dispatch(setUsers(res));
          })
          .catch((e) => {
            httpNotify(e.status, "Error al intentar obtener lista de usuarios");
            dispatch(setUsers([]));
          })
          .finally(() => noRequest());
        break;
      }
      case RequestEnum.AddEmploye: {
        createEmployeService(params.employee)
          .then(() => {
            notify("Empleado nuevo :D", "success");
          })
          .catch((e) => {
            httpNotify(e.status, "Error al intentar crear empleado");
          })
          .finally(() => noRequest());
        break;
      }
      case RequestEnum.SearchEmployee: {
        getEmployeeService(params.employeeId)
          .then((res) => {
            if (res) {
              dispatch(setEmployee(res));
            } else {
              dispatch(newEmployee());
            }
          })
          .catch((e) => {
            httpNotify(e.status, "Error en  peticion");
          })
          .finally(() => noRequest());
        break;
      }
      case RequestEnum.GetAllDepartament: {
        getAllDepartamentService()
          .then((res: Departament[]) => {
            dispatch(setDepartaments(res));
          })
          .catch((e) => {
            httpNotify(e.status, "Error en  peticion");
          })
          .finally(() => noRequest());
        break;
      }
      case RequestEnum.UpdateEmploye: {
        updateEmployeService(params.employee)
          .then(() => {
            notify("Empleado actualizado :D", "success");
          })
          .catch((e) => {
            httpNotify(e.status, "Error al intentar actualizar empleado");
          })
          .finally(() => noRequest());
        break;
      }
      case RequestEnum.RemoveEmploye: {
        removeEmployeService(params.employeeId)
          .then(() => {
            dispatch(newEmployee());
            notify("Empleado borrado con éxito", "success");
          })
          .catch((e) => {
            httpNotify(e.status, "Error al intentar  borrar empleado");
          })
          .finally(() => noRequest());
        break;
      }
    }
  };
};

export { useRequestApiEmployee };
