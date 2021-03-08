import React from "react";
import { UIBasicInfo } from "./BasicInfo";

export default {
  title: "UI Basic info",
  component: UIBasicInfo,
};

export const Basic: React.VFC<{}> = () => (
  <UIBasicInfo title="titulo"  text="texto" />
);
