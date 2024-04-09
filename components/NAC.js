import React from "react";
import styles from "../styles/Modal.module.css";

import NavBar from "./NavBar";

function NAC({ onClose }) {
  return (
    <div className={styles.mainContainer}>
      <NavBar onClose={onClose} />

      <div className={styles.content}>
        <p>NAC</p>
      </div>
    </div>
  );
}

export default NAC;
