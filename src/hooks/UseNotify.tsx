import { VariantType } from "notistack";
import { setSnack } from "src/redux/reducers";
import { useDispatch } from "react-redux";

const useNotify = () => {
  const dispatch = useDispatch();
  const notify = (message: string, variant: VariantType) => {
    dispatch(setSnack({ message, variant: variant }));
  };

  const httpNotify = (status: number, message: string) => {
    const variant = "error";
    switch (+status) {
      case 403: {
        notify("Su sesion ha experido. Inice sesion nuevamente", variant);
        break;
      }
      case 401: {
        notify("No posee permiso para realizar esta accion", variant);
        break;
      }
      case 400: {
        notify(
          "Error interno, Por favor comuniquese con el administrador",
          variant
        );
        break;
      }
      default: {
        notify(message, variant);
      }
    }
  };
  return { notify, httpNotify };
};

export { useNotify };