import React from "react";
import styles from "./Message.module.scss";
import InfoIcon from "@material-ui/icons/Info";
import { CircularProgress } from "@material-ui/core";
interface MessageProps {
  title?: string;
  description?: string;
  isLoading?: boolean;
}
const UIMessage: React.FC<MessageProps> = ({
  title = "No Info",
  description = "",
  isLoading = false,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <span className={styles.title}>{title}</span>
        {isLoading ? <CircularProgress /> : <InfoIcon />}
        <span className={styles.description}>{description}</span>
      </div>
    </div>
  );
};

export { UIMessage };
