import React from "react";
import { UISidebar } from "./Sidebar";

const options: any[] = [
  {
    key: "1",
    label: "Create",
  },
  { key: "2", label: "List" },
  { key: "3", label: "Update" },
  { key: "4", label: "Delete" },
];


export default {
  title: "UI Sidebar",
  component: UISidebar,
};

export const Basic: React.VFC<{}> = () => (
  <UISidebar options={options} selectedItem="3" onClick={() => {}}/>
);
