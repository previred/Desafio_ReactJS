import React, { useEffect } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { LoginMain } from "./modules/components/login/Login";
import { EmployeeMain } from "./modules/components/employee/Employee";
import { useSnackbar } from "notistack";
import { Main } from "./modules/components/main/Main";
import { useSelector } from "react-redux";
import { SnackSelector } from "./redux/store";

const App: React.FC = () => {
  const { enqueueSnackbar } = useSnackbar();
  const { message, variant, amountNotification } = useSelector(SnackSelector);

  useEffect(() => {
    if (!!amountNotification) enqueueSnackbar(message, { variant });
  }, [amountNotification]);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={LoginMain} />
        <Main path="/employee">
          <Route component={EmployeeMain} />
        </Main>
        <Route render={() => <Redirect to="/login" />} />
      </Switch>
    </BrowserRouter>
  );
};

export { App };
