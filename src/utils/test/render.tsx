import React, { ReactElement } from "react";
import { Provider } from "react-redux";
import { render as rtlRender, RenderOptions } from "@testing-library/react";
import { createMemoryHistory, History } from "history";
import { Router } from "react-router-dom";
import { store } from "src/redux/store";

interface CustomRenderOptions extends Omit<RenderOptions, "wrapper"> {
  history?: History;
}

export * from "@testing-library/react";

export function render(
  ui: ReactElement,
  { history = createMemoryHistory(), ...options }: CustomRenderOptions = {}
) {
  return {
    ...rtlRender(ui, {
      ...options,
      wrapper({ children }) {
        return (
          <Provider store={store}>
            <Router history={history}>{children}</Router>
          </Provider>
        );
      },
    }),
    history,
  };
}