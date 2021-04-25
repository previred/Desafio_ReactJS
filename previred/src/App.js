import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { Router } from "@reach/router";
import Login from "./pages/Login";
import Employees from "./pages/Employees";
import CreateEmployee from "./pages/CreateEmployee";
import "./App.css";

import configureStore from "./redux/store";

let { store, persistor } = configureStore();

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Login path="/login" />
          <Employees path="/employees" />
          <CreateEmployee path="/employees/create" />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
