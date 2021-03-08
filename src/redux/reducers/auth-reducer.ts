import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { setJwt, clearJwt, getJwt, decodeJwt } from "src/helpers";
import { AuthState } from "src/models/auth";

export const defaultState: AuthState = {
  employee: null,
  authenticated: false,
};
const saveCredentials = (state: AuthState, code: string) => {
  try {
    setJwt(code);
    const { employee } = decodeJwt();
    state.employee = employee;
    state.authenticated = true;
  } catch (e) {
    state = defaultState;
  }
};
const { reducer: AuthReducer, actions } = createSlice({
  name: "auth",
  initialState: defaultState,
  reducers: {
    setLogin: (state, action: PayloadAction<string>) => {
      saveCredentials(state, action.payload);
    },
    setLogout: (state) => {
      clearJwt();
      state.employee = null;
      state.authenticated = false;
    },
    refreshCredentials: (state) => {
      saveCredentials(state, getJwt() || "");
    },
  },
});

export { AuthReducer };

export const { setLogin, setLogout, refreshCredentials } = actions;
