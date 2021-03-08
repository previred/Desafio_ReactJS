import { Grid } from "@material-ui/core";
import React from "react";
import { UISearch } from "../search/Search";
import styles from "./Header.module.scss";

interface InfoProps {
  title: string;
  typeSearch?: string;
  onSearch?: (search: string) => void;
}

const UIHeader: React.FC<InfoProps> = ({ title,typeSearch, onSearch }) => {
  return (
    <Grid container className={styles.container}>
      <Grid item xs={8}>
        <span>{title}</span>
      </Grid>
      {typeof onSearch === "function" && (
        <Grid item xs={4}>
          <UISearch onSearch={onSearch} type={typeSearch} />
        </Grid>
      )}
    </Grid>
  );
};

export { UIHeader };
