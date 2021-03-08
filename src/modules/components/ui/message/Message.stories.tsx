import React from "react";
import { UIMessage } from "./Message";

export default {
  title: "UI Message",
  component: UIMessage,
};

export const Basic: React.VFC<{}> = () => <UIMessage />;

export const WithProps: React.VFC<{}> = () => (
  <UIMessage
    title="Lorem ipsum"
    description="Mattis suspendisse ultrices consequat lacinia natoque inceptos, donec facilisis vulputate ad metus neque, sapien habitasse sollicitudin mauris platea. Morbi sed tincidunt habitasse sodales elementum nisi, libero lacus sem mauris dis nascetur, varius justo facilisis neque quis."
  />
);

export const Loading: React.VFC<{}> = () => (
  <UIMessage title="Loading" description="... " isLoading />
);
