import React, { useEffect, useRef, useState } from "react";
import Button from "@material-ui/core/Button";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { OptionSelect } from "src/models/ui";
import { CSSProperties } from "@material-ui/core/styles/withStyles";
import styles from "./DropdownMenu.module.scss";
import { Popper, Grow, Paper, MenuList, MenuItem } from "@material-ui/core";

interface MenuProps {
  extraStyle?: CSSProperties;
  labelMenu: string;
  options?: OptionSelect[];
  onClick: (key: string) => void;
}

export const UIDropdownMenu: React.FC<MenuProps> = ({
  extraStyle = {},
  labelMenu,
  options = [],
  onClick,
}) => {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef<any>(null);
  const prevOpen = useRef(open);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = ({ target }: { target: any }) => {
    if (anchorRef.current && anchorRef.current?.contains(target)) {
      return;
    }
    setOpen(false);
  };

  const handleListKeyDown = ({
    key,
    preventDefault,
  }: {
    key: string;
    preventDefault: () => void;
  }) => {
    if (key === "Tab") {
      preventDefault();
      setOpen(false);
    }
  };

  const handleOnClick = (
    e: React.MouseEvent<HTMLLIElement, MouseEvent>,
    key: any
  ) => {
    handleClose(e);
    onClick(key);
  };

  useEffect(() => {
    if (prevOpen.current && !open) {
      anchorRef.current.focus();
    }
    prevOpen.current = open;
  }, [open]);

  return (
    <div className={styles.container} style={extraStyle}>
      <Button
        ref={anchorRef}
        onClick={handleToggle}
        className={styles.mainButton}
        data-testid="select-element"
      >
        {labelMenu} <ArrowDropDownIcon />
      </Button>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
        className={styles.options}
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={open}
                  id="menu-list-grow"
                  onKeyDown={handleListKeyDown}
                >
                  {options.map(({ label, key }) => (
                    <MenuItem
                      onClick={(e) => handleOnClick(e, key)}
                      key={key}
                      data-testid={`${key}-option-element`}
                    >
                      {label}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
};
