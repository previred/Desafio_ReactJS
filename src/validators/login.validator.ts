import * as Yup from "yup";
import { validateRut } from "./custom.validator";

 
const ValidationLoginSchema = () => {
  const schema = Yup.object().shape({
    rut: Yup.string()
      .required("rut es requerido, ejemplo:12312312-3")
      .test('validateRut',
       "RUT invalido o formato incorrecto, ejemplo:12312312-3",
        (value) => validateRut(value)
      ),
    password: Yup.string().required("Ingrese una contraseña"),
  });

  return schema;
};

export { ValidationLoginSchema };
