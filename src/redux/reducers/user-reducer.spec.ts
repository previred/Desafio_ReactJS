import { cleanup } from "@testing-library/react";
import { User, UserState } from "src/models/user";
import {
  defaultState,
  setUsers,
  UserReducer,
  newEmployee,
  setEmployee,
  employeeDefault,
} from "./user-reducer";

describe("User Reducer", () => {
  afterEach(cleanup);
  const users: User[] = [
    {
      idEmployee: 24,
      name: "some text",
      surname: "some text",
      email: "some text",
      rut: "86",
      dv: "some text",
      password: "some text",
      department: {
        idDept: 56,
        description: "some text",
      },
      isAdm: true,
    },
    {
      idEmployee: 1,
      name: "some text",
      surname: "some text",
      email: "some text",
      rut: "45",
      dv: "some text",
      password: "some text",
      department: {
        idDept: 43,
        description: "some text",
      },
      isAdm: false,
    },
  ];
  const stateNew: UserState ={
    users, 
    employeeSearch: users[1]
  }
  test("should be return the initial state", () => {
    const result = UserReducer(undefined, { type: undefined });
    expect(result).toEqual(defaultState);
  });
  test("should be set users", () => {
    const result: UserState = {
      users,
      employeeSearch: employeeDefault
    };
    const state = UserReducer(defaultState, setUsers(users));
    expect(state).toEqual(result);
  });
  test("should be search user", () => {
    const result: UserState = {
      users,
      employeeSearch: users[0]
    };
    const state = UserReducer(stateNew, setEmployee(users[0]));
    expect(state).toEqual(result);
  });
  test("should be default searchUser", () => {
    const result: UserState = {
      users,
      employeeSearch: employeeDefault
    };
    const state = UserReducer(stateNew, newEmployee());
    expect(state).toEqual(result);
  });
});
