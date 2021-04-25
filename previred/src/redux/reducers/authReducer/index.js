import { SET_AUTH_INFO, REMOVE_AUTH_INFO } from "../../constants/actionTypes";

const initialState = {
  idEmployee: null,
  name: null,
  surname: null,
  email: null,
  rut: null,
  dv: null,
  department: {},
  isAdm: null,
};

const actionsMap = {
  [SET_AUTH_INFO]: (state, action) => {
    return {
      ...state,
      idEmployee: action.payload.idEmployee,
      name: action.payload.name,
      surname: action.payload.surname,
      email: action.payload.email,
      rut: action.payload.rut,
      dv: action.payload.dv,
      department: action.payload.department,
      isAdm: action.payload.isAdm,
    };
  },
  [REMOVE_AUTH_INFO]: (state) => {
    return {
      ...initialState,
    };
  },
};

export function AuthReducer(state = initialState, action = {}) {
  const fn = actionsMap[action.type];
  return fn ? fn(state, action) : state;
}
