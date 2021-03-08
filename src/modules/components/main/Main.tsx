import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { refreshCredentials } from "src/redux/reducers";
import { AuthSelector } from "src/redux/store";
import { MainHeader } from "./header/Header";
import styles from "./Main.module.scss";

const Main = ({ children, ...rest }: any) => {
  const dispatch = useDispatch();
  const { authenticated, employee } = useSelector(AuthSelector);
  const [reloadSesion, setReloadSesion] = useState(false);

  useEffect(() => {
    if (!authenticated) {
      dispatch(refreshCredentials());
      setReloadSesion(true)
    }
  }, [authenticated]);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        authenticated && employee ? (
          <div className={styles.container}>
            <header>
              <MainHeader employee={employee} />
            </header>
            <main>{children}</main>
          </div>
        ) : (
          reloadSesion && (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location },
              }}
            />
          )
        )
      }
    />
  );
};

export { Main };
