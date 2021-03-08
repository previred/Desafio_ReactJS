import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import { UIDialog } from "./Dialog";

describe(" <UIDialog />", () => {
  afterEach(cleanup);
  test("should be render component", () => {
    const onConfirm = jest.fn();
    const { getByText } = render(
      <UIDialog
        onConfirm={onConfirm}
        title="Lorem ipsum."
        description="description text"
      />
    );
    expect(getByText(/Abrir/i)).toBeInTheDocument();
    fireEvent.click(getByText("Abrir"));
    expect(getByText(/Lorem ipsum/i)).toBeInTheDocument();
    fireEvent.click(getByText("Confirmar"));
    expect(onConfirm).toHaveBeenCalledTimes(1);
  });
});
