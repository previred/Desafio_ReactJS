import React from "react";
import { render, cleanup } from "@testing-library/react";
import { UIBasicInfo } from "./BasicInfo";

describe(" <UIBasicInfo />", () => {
  afterEach(cleanup);
  test("should be render component", () => {
    const { getByText } = render(  <UIBasicInfo title="titulo"  text="texto" />)
    expect(getByText(/titulo/i)).toBeInTheDocument();
    expect(getByText(/texto/i)).toBeInTheDocument();
  });
});
