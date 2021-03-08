import React from "react";
import styles from "./BasicInfo.module.scss"

interface IBasicProps {
    title: string
    text: string | number
  }
  
const UIBasicInfo: React.FC<IBasicProps> = ({title, text}) => {
  return (
    <>
      <span className={styles.title}>{title}</span>
      <span className={styles.text}>
        {text}
      </span>
    </>
  );
};

export { UIBasicInfo };
