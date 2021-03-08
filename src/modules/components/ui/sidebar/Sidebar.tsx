import React from "react";
import { Paper, MenuItem } from "@material-ui/core";
import MenuList from "@material-ui/core/MenuList";
import styles from "./Sidebar.module.scss";

interface SidebarProps {
  options: any[];
  selectedItem: string;
  onClick: (key: string) => void;
}
const UISidebar: React.FC<SidebarProps> = ({
  options = [],
  selectedItem,
  onClick,
}) => {
  return (
    <Paper className={styles.container}>
      <MenuList>
        {options.map(({ label, key }) => (
          <MenuItem
            onClick={() => onClick(key)}
            key={key}
            selected={key === selectedItem}
          >
            {label}
          </MenuItem>
        ))}
      </MenuList>
    </Paper>
  );
};

export { UISidebar };
