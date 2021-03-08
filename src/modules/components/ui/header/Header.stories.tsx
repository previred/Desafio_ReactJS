import React from "react";
import { UIHeader } from "./Header";

export default {
  title: "UI header",
  component: UIHeader,
};

export const Basic: React.VFC<{}> = () => <UIHeader title="Lorem" />;

export const WithSearchNumeric: React.VFC<{}> = () => (
  <UIHeader title="Lorem ipsum title" onSearch={() => {}} typeSearch="number" />
);

export const WithSearch: React.VFC<{}> = () => (
  <UIHeader title="Lorem ipsum title" onSearch={() => {}} />
);
