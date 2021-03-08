import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserState, User } from "src/models/user";

export const employeeDefault: User = {
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

export const defaultState: UserState = {
  users: [],
  employeeSearch: employeeDefault,
};

const { reducer: UserReducer, actions } = createSlice({
  name: "users",
  initialState: defaultState,
  reducers: {
    setUsers: (state, action: PayloadAction<User[]>) => {
      state.users = action.payload;
    },
    newEmployee: (state) => {
      state.employeeSearch = employeeDefault;
    },
    setEmployee: (state, action: PayloadAction<User>) => {
      state.employeeSearch = action.payload;
    },
  },
});

export { UserReducer };

export const { setUsers, newEmployee, setEmployee } = actions;
