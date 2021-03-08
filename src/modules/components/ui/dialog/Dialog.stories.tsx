import React from "react";
import { UIDialog } from "./Dialog";

export default {
  title: "UI Dialog",
  component: UIDialog,
};

export const Basic: React.VFC<{}> = () => (
  <UIDialog
    onConfirm={() => {}}
    title="Lorem ipsum."
    description="Lorem ipsum dolor sit amet consectetur adipiscing elit ornare, mauris quam vestibulum senectus class hendrerit at lobortis, orci sociis metus pharetra nostra urna risus. Habitasse tincidunt parturient scelerisque duis lacinia, dictum mollis imperdiet primis nisl, est aenean erat aptent. Vehicula magnis ad placerat torquent mauris quis semper turpis, nec cubilia aenean egestas convallis posuere sed libero vivamus, vitae magna aptent habitasse nisl tincidunt varius."
  />
);

export const withPropierties: React.VFC<{}> = () => (
  <UIDialog
    buttonText="Dialog"
    cancelButtonText="Cancelar"
    confirmbuttonText="Suscribirse"
    buttonExtraStyle={{ width: "250px" }}
    onConfirm={() => {}}
    title="Lorem ipsum."
    description="Lorem ipsum dolor sit amet consectetur adipiscing elit ornare, mauris quam vestibulum senectus class hendrerit at lobortis, orci sociis metus pharetra nostra urna risus. Habitasse tincidunt parturient scelerisque duis lacinia, dictum mollis imperdiet primis nisl, est aenean erat aptent. Vehicula magnis ad placerat torquent mauris quis semper turpis, nec cubilia aenean egestas convallis posuere sed libero vivamus, vitae magna aptent habitasse nisl tincidunt varius."
  />
);
