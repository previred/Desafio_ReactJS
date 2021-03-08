import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import { UIDropdownMenu } from "./DropdownMenu";
import { OptionSelect } from "src/models/ui";

describe(" <UIDropdownMenu />", () => {
  afterEach(cleanup);
  test("should be render component", () => {
    const options: OptionSelect[] = [
      {
        key: 1,
        label: "option 1",
      },
      { key: 2, label: "option 2" },
    ];
    const onClick = jest.fn();
    const { getByText,queryByTestId } = render(
      <UIDropdownMenu labelMenu="label" options={options} onClick={onClick} />
    );
    expect(getByText(/label/i)).toBeInTheDocument();
    const select = queryByTestId("select-element");
    expect(select).toBeInTheDocument();
  });
});
