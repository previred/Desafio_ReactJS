import * as Yup from "yup";
import { validateRut } from "./custom.validator";

const ValidationFormEmployeeSchema = () => {
  const schema = Yup.object().shape({
    rut: Yup.string()
      .required("rut es requerido, ejemplo:12312312-3")
      .test(
        "validateRut",
        "RUT invalido o formato incorrecto, ejemplo:12312312-3",
        (value) => validateRut(value)
      ),
    password: Yup.string()
      .required("Ingrese una contraseña")
      .min(6, "Debe contener al menos 6 caracteres"),
    passwordConfirmation: Yup.string()
      .oneOf([Yup.ref("password"), null], "Las contraseñas no coinciden")
      .required("Ingrese confirmacion de contraseña"),
    name: Yup.string()
      .min(3, "muy corto!")
      .max(50, "Ingrese menos caracteres!")
      .required("Nombre es requerido, ejemplo: juan"),
    surname: Yup.string()
      .min(3, "muy corto!")
      .max(50, "Ingrese menos caracteres!")
      .required("Apellido es requerido, ejemplo:m Perez"),
    email: Yup.string()
      .email("Formato de email incorrecto")
      .required("Email es requerido, ejemplo: jv@maito.com"),
    idDepartament: Yup.number().required("Selecciona un departamento"),
  });

  return schema;
};

export { ValidationFormEmployeeSchema };
