import { store } from "./store";
import { cleanup } from "@testing-library/react";
import {
  defaultStatusUser,
  defaultStatusRequest,
  defaultStateAuth,
  defaultStateDepartament,
  defaultStateSnack,
} from "./reducers";

describe("store ", () => {
  afterEach(cleanup);

  test("should be loading Selector", () => {
    const defaultsStates = {
      userReducer: defaultStatusUser,
      requestReducer: defaultStatusRequest,
      authReducer: defaultStateAuth,
      snackReducer: defaultStateSnack,
      departamentReducer: defaultStateDepartament,
    };

    expect(store.getState()).toEqual(defaultsStates);
  });
});
