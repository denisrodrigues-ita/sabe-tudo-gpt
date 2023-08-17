import React from "react";
import styles from "./Loading.module.css"

const index = () => {
  return (
    <div className={styles.circ}>
      <div className={styles.load}>Loading . . . </div>
      <div className={styles.hands}></div>
      <div className={styles.body}></div>
      <div className={styles.head}>
        <div className={styles.eye}></div>
      </div>
    </div>
  );
};

export default index;
