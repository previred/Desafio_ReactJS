import { configureStore } from "@reduxjs/toolkit";
import { RequestApi, SnackNotification } from "src/models/api";
import { AuthState } from "src/models/auth";
import { DepartamentState } from "src/models/departament";
import { UserState } from "src/models/user";
import { RequestReducer, UserReducer, AuthReducer, SnackReducer, DepartamentReducer } from "./reducers";

const reducer = {
  userReducer: UserReducer,
  requestReducer: RequestReducer,
  authReducer: AuthReducer,
  snackReducer: SnackReducer,
  departamentReducer: DepartamentReducer
};

const store = configureStore({
  reducer,
});

export { store };

type RootState = ReturnType<typeof store.getState>;

export const UserSelector = (state: RootState): UserState =>
  state.userReducer;
export const RequestSelector = (state: RootState): RequestApi =>
  state.requestReducer;

  export const AuthSelector = (state: RootState): AuthState =>
  state.authReducer;

  export const SnackSelector = (state: RootState): SnackNotification =>
  state.snackReducer;

  export const DepartamentSelector = (state: RootState): DepartamentState =>
  state.departamentReducer;