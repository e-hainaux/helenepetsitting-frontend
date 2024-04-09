import React from "react";
import styles from "../styles/Modal.module.css";
import NavBar from "./NavBar";

function Chevaux({ onClose }) {
  return (
    <div className={styles.mainContainer}>
      <NavBar onClose={onClose} />

      <div className={styles.content}>
        <p>CHEVAUX</p>
      </div>
    </div>
  );
}

export default Chevaux;
