import React from "react";
import styles from "../styles/Modal.module.css";
import BackButton from "./BackButton";

function BasseCour({ onClose }) {
  return (
    <div className={styles.mainContainer}>
      <BackButton onClose={onClose} />

      <div className={styles.content}>
        <p>BASSE-COUR</p>
      </div>
    </div>
  );
}

export default BasseCour;
