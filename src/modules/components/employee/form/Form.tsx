import { TextField, DialogActions, Button, Grid } from "@material-ui/core";
import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import { User } from "src/models/user";
import { ValidationFormEmployeeSchema } from "src/validators";
import { UISelect } from "src/modules/components/ui";
import { OptionSelect } from "src/models/ui";
import { Departament } from "src/models/departament";
import styles from "./Form.module.scss";

interface FormProps {
  employee: User;
  departaments: Departament[];
  isCreate?: boolean;
  action?: string;
  onAction: (employee: User) => void;
}

const EmployeeForm: React.FC<FormProps> = ({
  employee,
  action = "Crear",
  isCreate = false,
  departaments = [],
  onAction,
}) => {
  const [initialValues] = useState({
    ...employee,
    rut: isCreate ? "" : `${employee.rut}-${employee.dv}`,
    passwordConfirmation: employee.password,
    idDepartament: employee.department?.idDept || "",
  });

  const [options, setOptions] = useState<OptionSelect[]>([]);
  const adminOptions: OptionSelect[] = [
    { key: "true", label: "Si" },
    { key: "false", label: "No" },
  ];

  useEffect(() => {
    const opts: OptionSelect[] = departaments.map(({ description, idDept }) => {
      return {
        key: idDept || "",
        label: description,
      };
    });
    setOptions(opts);
  }, [departaments]);

  return (
    <Formik
      enableReinitialize={true}
      initialValues={initialValues}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        setSubmitting(true);
        const [rut, dv] = values.rut.split("-");
        const department: Departament = departaments.find(
          ({ idDept }) => idDept === +values.idDepartament
        ) || { idDept: null, description: "" };
        onAction({
          email: values.email,
          rut,
          dv,
          department,
          surname: values.surname,
          name: values.name,
          password: values.password,
          isAdm: values.isAdm,
          idEmployee: values.idEmployee,
        });
        if (isCreate) {
          resetForm({ values: initialValues });
        }
      }}
      validationSchema={ValidationFormEmployeeSchema}
    >
      {(props) => {
        const {
          values,
          touched,
          errors,
          isSubmitting,
          isValid,
          dirty,
          handleChange,
          handleBlur,
          handleSubmit,
        } = props;
        return (
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3} className={styles.container}>
              <Grid item xs={6}>
                <TextField
                  error={!!errors.name && touched.name}
                  label="Nombre"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  variant="outlined"
                  onBlur={handleBlur}
                  helperText={errors.name && touched.name && errors.name}
                  placeholder="ejemplo: Juan"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  error={!!errors.surname && touched.surname}
                  label="Apellido"
                  name="surname"
                  value={values.surname}
                  onChange={handleChange}
                  variant="outlined"
                  onBlur={handleBlur}
                  helperText={
                    errors.surname && touched.surname && errors.surname
                  }
                  placeholder="ejemplo: Perez"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  error={!!errors.password && touched.password}
                  label="Contraseña"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  variant="outlined"
                  type="password"
                  onBlur={handleBlur}
                  helperText={
                    errors.password && touched.password && errors.password
                  }
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  error={
                    !!errors.passwordConfirmation &&
                    touched.passwordConfirmation
                  }
                  label="Confirme contraseña"
                  name="passwordConfirmation"
                  value={values.passwordConfirmation}
                  onChange={handleChange}
                  variant="outlined"
                  type="password"
                  onBlur={handleBlur}
                  helperText={
                    errors.passwordConfirmation &&
                    touched.passwordConfirmation &&
                    errors.passwordConfirmation
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  error={!!errors.email && touched.email}
                  label="Email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  variant="outlined"
                  onBlur={handleBlur}
                  helperText={errors.email && touched.email && errors.email}
                />
              </Grid>
              <Grid item xs={6}>
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
              </Grid>
              <Grid item xs={3}>
                <UISelect
                  defaultValue={values.idDepartament}
                  options={options}
                  label="Departamento"
                  name="idDepartament"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={!!errors.idDepartament && touched.idDepartament}
                  helperText={
                    errors.idDepartament &&
                    touched.idDepartament &&
                    errors.idDepartament
                  }
                />
              </Grid>
              <Grid item xs={3}>
                <UISelect
                  defaultValue={values.isAdm.toString()}
                  options={adminOptions}
                  label="Administrador"
                  idSelect="is-admin"
                  name="isAdm"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={!!errors.isAdm && touched.isAdm}
                  helperText={errors.isAdm && touched.isAdm && errors.isAdm}
                />
              </Grid>
            </Grid>
            <DialogActions disableSpacing className={styles.buttonContainer}>
              <Button
                type="submit"
                disabled={!(isValid && dirty) || isSubmitting} 
                color="primary"
                variant="contained"
              >
                {action}
              </Button>
            </DialogActions>
          </form>
        );
      }}
    </Formik>
  );
};

export { EmployeeForm };
