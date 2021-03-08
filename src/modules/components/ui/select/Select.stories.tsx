import React from "react";
import { OptionSelect } from "src/models/ui";
import { UISelect } from "./Select";

const options: OptionSelect[] = [
  {
    key: 1,
    label: "option 1",
  },
  { key: 2, label: "option 2" },
  { key: 3, label: "option 3" },
  { key: 4, label: "option 4" },
];

export default {
  title: "UI Select",
  component: UISelect,
};

export const Basic: React.VFC<{}> = () => (
  <UISelect
    defaultValue={2}
    helperText="Lorem error"
    label="Select"
    name="Name"
    options={options}
    error={false}
    onBlur={() => {}}
    onChange={() => {}}
  />
);

export const WithError: React.VFC<{}> = () => (
  <UISelect
    defaultValue={""}
    helperText="Lorem error"
    label="Select"
    name="Name"
    options={options}
    error
    onBlur={() => {}}
    onChange={() => {}}
  />
);

