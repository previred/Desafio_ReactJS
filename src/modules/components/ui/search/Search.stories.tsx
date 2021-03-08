import React from "react";
import { UISearch } from "./Search";

export default {
  title: "UI Search",
  component: UISearch,
};

export const Basic: React.VFC<{}> = () => (
  <UISearch onSearch={() => {}}/>
);

export const SearchAmountCharacters: React.VFC<{}> = () => (
  <UISearch onSearch={() => {}}   amountCharacters={3}
  placeholder="lorem ipsum ...."/>
);

export const SearchNumber: React.VFC<{}> = () => (
  <UISearch onSearch={() => {}}   type="number"/>
);