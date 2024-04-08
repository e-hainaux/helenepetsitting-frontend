import React from "react";
import styles from "../styles/Modal.module.css";
import BackButton from "./BackButton";

function NAC({ onClose }) {
  return (
    <div className={styles.mainContainer}>
      <BackButton onClose={onClose} />

      <div className={styles.content}>
        <p>NAC</p>
      </div>
    </div>
  );
}

export default NAC;
