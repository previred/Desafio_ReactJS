import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { Router } from "@reach/router";
import Login from "./pages/Login";
import Employees from "./pages/Employees";
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
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
