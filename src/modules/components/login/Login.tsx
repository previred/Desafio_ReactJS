import React from "react";
import {
  Button,
  DialogActions,
  TextField,
  CardContent,
  Card,
} from "@material-ui/core";
import { Formik } from "formik";
import { getLogin } from "src/modules/services/login.service";
import { UILogo } from "src/modules/components/ui";
import { ValidationLoginSchema } from "src/validators";
import { setLogin, setSnack } from "src/redux/reducers";
import { useDispatch } from "react-redux";
import { Login } from "src/models/auth";
import { useHistory } from "react-router-dom";
import styles from "./Login.module.scss";

const LoginMain: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const initialValues: Login = { rut: "", password: "" };

  const handleSubmit = async (values: Login) => {
    const [rut] = values.rut.split("-");
    try {
      const { accessToken } = await getLogin({
        password: values.password,
        rut,
      });
      dispatch(setLogin(accessToken));
      history.push("/employee/list");
    } catch (e) {
      dispatch(
        setSnack({ message: "Por favor verifique rut y password", variant: "error" })
      );
    }
  };

  return (
    <div className={styles.loginContainer}>
      <Card className={styles.card}>
        <CardContent>
          <div className={styles.logo}>
            <UILogo />
          </div>
          <Formik
            enableReinitialize={true}
            initialValues={initialValues}
            onSubmit={async (values, { setSubmitting }) => {
              setSubmitting(true);
              handleSubmit(values);
            }}
            validationSchema={ValidationLoginSchema}
          >
            {(props) => {
              const {
                values,
                touched,
                errors,
                isSubmitting,
                handleChange,
                handleBlur,
                handleSubmit,
              } = props;
              return (
                <form onSubmit={handleSubmit}>
                  <TextField
                    error={!!errors.rut && touched.rut}
                    label="RUT"
                    name="rut"
                    value={values.rut}
                    onChange={handleChange}
                    variant="outlined"
                    onBlur={handleBlur}
                    helperText={errors.rut && touched.rut && errors.rut}
                    placeholder="ejemplo: 12312312-3"
                  />
                  <TextField
                    error={!!errors.password && touched.password}
                    label="Contraseña"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    value={values.password}
                    onChange={handleChange}
                    variant="outlined"
                    onBlur={handleBlur}
                    helperText={
                      errors.password && touched.password && errors.password
                    }
                  />
                  <DialogActions disableSpacing>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      color="primary"
                      variant="contained"
                    >
                      Ingresar
                    </Button>
                  </DialogActions>
                </form>
              );
            }}
          </Formik>
        </CardContent>
      </Card>
    </div>
  );
};

export { LoginMain };
