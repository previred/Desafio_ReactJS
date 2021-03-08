import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Route, Redirect, useRouteMatch } from "react-router-dom";
import { AuthSelector } from "src/redux/store";

const Admin = ({ children, ...rest }: any) => {
  const { path } = useRouteMatch();
  const { employee } = useSelector(AuthSelector);
  const [reloadPath, setReloadPath] = useState(false);

  useEffect(() => {
    if (employee?.isAdm) {
      setReloadPath(true);
    }
  }, [employee]);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        employee?.isAdm ? (
          <div>{children}</div>
        ) : (
          reloadPath && (
            <Redirect
              to={{
                pathname: { path },
                state: { from: location },
              }}
            />
          )
        )
      }
    />
  );
};

export { Admin };
