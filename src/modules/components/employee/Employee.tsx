import { Card, CardContent, Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { UIMessage, UISidebar } from "../ui";
import { EmployeeCreate } from "./create/Create";
import { EmployeeList } from "./list/List";
import styles from "./Employee.module.scss";
import { useLoacationEmployee, useRequestApiEmployee } from "src/hooks";
import { EmployeeUpdate } from "./update/Update";
import { EmployeeDelete } from "./delete/Delete";
import { Admin } from "../admin/Admin";
import { useSelector } from "react-redux";
import { AuthSelector } from "src/redux/store";

const EmployeeMain: React.FC = () => {
  const optionDefault = [
    { key: "list", label: "Consultar empleados", isOnlyAdm: false },
    { key: "create", label: "Crear empleado", isOnlyAdm: true },
    { key: "update", label: "Modificar empleado", isOnlyAdm: true },
    { key: "delete", label: "Eliminar empleado", isOnlyAdm: true },
  ];
  const [options, setOption] = useState<any[]>([]);
  const { path, route, updateLocation } = useLoacationEmployee();
  const { employee } = useSelector(AuthSelector);
  useRequestApiEmployee();
  useEffect(() => {
    if (!employee?.isAdm) {
      const sideBarUser = optionDefault.filter(({ isOnlyAdm }) => !isOnlyAdm);
      setOption(sideBarUser);
    } else {
      setOption(optionDefault);
    }
  }, [employee]);
  return (
    <div className={styles.container}>
      {options.length ? (
        <Grid container spacing={6}>
          <Grid item xs={3}>
            <UISidebar
              options={options}
              onClick={updateLocation}
              selectedItem={route}
            />
          </Grid>
          <Grid item xs={9}>
            <Card>
              <CardContent>
                <Switch>
                  <Route path={`${path}/list`} component={EmployeeList} />
                  <Admin>
                    <Route path={`${path}/create`} component={EmployeeCreate} />
                    <Route path={`${path}/update`} component={EmployeeUpdate} />
                    <Route path={`${path}/delete`} component={EmployeeDelete} />
                  </Admin>
                  <Route render={() => <Redirect to={`${path}/list`} />} />
                </Switch>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      ): <UIMessage isLoading={!options.length}/>}
    </div>
  );
};

export { EmployeeMain };
