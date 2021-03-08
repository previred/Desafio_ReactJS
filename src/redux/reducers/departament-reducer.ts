import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Departament, DepartamentState } from "src/models/departament";

export const defaultState: DepartamentState = {
  departaments: [],
};

const { reducer: DepartamentReducer, actions } = createSlice({
  name: "departaments",
  initialState: defaultState,
  reducers: {
    setDepartaments: (state, action: PayloadAction<Departament[]>) => {
        state.departaments = action.payload;
    },
  },
});

export { DepartamentReducer };

export const { setDepartaments } = actions;