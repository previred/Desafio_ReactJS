import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SnackNotification } from "src/models/api";

export const defaultState: SnackNotification = {
  message: "",
  amountNotification: 0,
  variant: "default",
};

const updateAmount = (numberRequest = 0) => {
  return (numberRequest += 1);
};

const { reducer: SnackReducer, actions } = createSlice({
  name: "snack",
  initialState: defaultState,
  reducers: {
    setSnack: (state, action: PayloadAction<SnackNotification>) => {
      state.variant = action.payload.variant;
      state.message = action.payload.message;
      state.amountNotification = updateAmount(state.amountNotification);
    },
  },
});

export { SnackReducer };

export const { setSnack } = actions;
