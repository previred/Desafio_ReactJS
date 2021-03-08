import React from "react";
import { OptionSelect } from "src/models/ui";
import { UIDropdownMenu } from "./DropdownMenu";

export default {
  title: "UI Dropdown Menu",
  component: UIDropdownMenu,
};

const options: OptionSelect[] = [
  {
    key: 1,
    label: "option 1",
  },
  { key: 2, label: "option 2" },
];

export const Basic: React.VFC<{}> = () => (
  <UIDropdownMenu labelMenu="label" options={options} onClick={() => {}} />
);
