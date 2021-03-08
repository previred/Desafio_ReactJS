import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RequestApi, RequestEnum } from "src/models/api";

export const defaultState: RequestApi = {
  name: RequestEnum.NotRequest,
  numberRequest: 0,
  params: null
};

const updateRequest = (numberRequest = 0) => {
  return (numberRequest += 1);
};

const { reducer: RequestReducer, actions } = createSlice({
  name: "request",
  initialState: defaultState,
  reducers: {

    setRequestApi: (state, action: PayloadAction<RequestApi>) => {
      if (action.payload.name !== RequestEnum.NotRequest) {
        state.params = action.payload.params;
        state.numberRequest = updateRequest(state.numberRequest);
      }
      state.name = action.payload.name;
    },
  },
});

export { RequestReducer };

export const {  setRequestApi } = actions;
