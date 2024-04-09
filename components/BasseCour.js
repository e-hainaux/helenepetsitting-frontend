import React from "react";
import styles from "../styles/Modal.module.css";
import NavBar from "./NavBar";

function BasseCour({ onClose }) {
  return (
    <div className={styles.mainContainer}>
      <NavBar onClose={onClose} />

      <div className={styles.content}>
        <p>BASSE-COUR</p>
      </div>
    </div>
  );
}

export default BasseCour;
