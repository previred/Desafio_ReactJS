import { debounce, InputBase } from "@material-ui/core";
import React, { useCallback } from "react";
import SearchIcon from "@material-ui/icons/Search";
import styles from "./Search.module.scss";

interface SearchProps {
  amountCharacters?: number;
  debounceTime?: number;
  placeholder?: string;
  type?: string;
  onSearch: (value: string) => void;
}

const UISearch: React.FC<SearchProps> = ({
  amountCharacters = 0,
  debounceTime = 200,
  placeholder = "Buscar ...",
  type = "",
  onSearch,
}) => {
  const debouncedSave = useCallback(
    debounce((nextValue: string) => onSearch(nextValue), debounceTime),
    []
  );
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value: nextValue } = event.target;
    if (nextValue.length >= amountCharacters || !nextValue.length) {
      debouncedSave(nextValue);
    }
  };
  return (
    <div className={styles.search}>
      <div className={styles.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        className={styles.input}
        placeholder={placeholder}
        inputProps={{ "aria-label": "search" }}
        onChange={handleChange}
        type={type}
      />
    </div>
  );
};

export { UISearch };
