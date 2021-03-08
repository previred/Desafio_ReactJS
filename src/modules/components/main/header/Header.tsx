import { AppBar, Toolbar } from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { User } from "src/models/user";
import { setLogout } from "src/redux/reducers";
import { UILogo, UIDropdownMenu } from "src/modules/components/ui";

interface HeaderProps {
  employee: User;
}

const MainHeader: React.FC<HeaderProps> = ({ employee: { name, surname } }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleClickOption = (key: string) => {
    if (key === "exit") {
      dispatch(setLogout());
      history.push("/login");
    }
  };

  return (
    <AppBar position="static" color="default">
      <Toolbar>
        <UILogo />
        <UIDropdownMenu
          labelMenu={`Hola, ${name} ${surname}`}
          options={[{ label: "salir", key: "exit" }]}
          extraStyle={{ marginLeft: "auto" }}
          onClick={handleClickOption}
        />
      </Toolbar>
    </AppBar>
  );
};

export { MainHeader };
