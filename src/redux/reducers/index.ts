export {
  UserReducer,
  defaultState as defaultStatusUser,
  setUsers, newEmployee, setEmployee
} from "./user-reducer";
export {
  RequestReducer,
  defaultState as defaultStatusRequest,
  setRequestApi,
} from "./request-api-reducer";
export {
  defaultState as defaultStateAuth,
  AuthReducer,
  setLogin,
  setLogout,
  refreshCredentials,
} from "./auth-reducer";
export {
  defaultState as defaultStateSnack,
  SnackReducer,
  setSnack,
} from "./notification-reducer";
export {
  defaultState as defaultStateDepartament,
  DepartamentReducer,
  setDepartaments,
} from "./departament-reducer";
