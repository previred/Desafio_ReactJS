import React from "react";
import ReactDOM from "react-dom";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { SnackbarProvider } from "notistack";
import { App } from "./App";

ReactDOM.render(
  <SnackbarProvider maxSnack={3}>
    <Provider store={store}>
      <App />
    </Provider>
  </SnackbarProvider>,
  document.getElementById("root")
);
