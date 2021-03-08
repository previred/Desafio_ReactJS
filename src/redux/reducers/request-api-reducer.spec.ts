import { cleanup } from "@testing-library/react";
import { result } from "lodash";
import { RequestApi, RequestEnum } from "src/models/api";
import {
  defaultState,
  RequestReducer,
  setRequestApi,
} from "./request-api-reducer";

describe("User Reducer", () => {
  afterEach(cleanup);
  test("should be return the initial state", () => {
    const result = RequestReducer(undefined, { type: undefined });
    expect(result).toEqual(defaultState);
  });
  test("should be setRequestApi", () => {
    const params = { limit: 3, page: 1, search: "" };
    const result = {
      name: RequestEnum.GetAll,
      numberRequest: 1,
      params
    };
    const request: RequestApi = {
      name: RequestEnum.GetAll,
      params,
    };
    const state = RequestReducer(defaultState, setRequestApi(request));
    expect(state).toEqual(result);
  });
});
