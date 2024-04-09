import React from "react";
import styles from "../styles/Modal.module.css";
import BackBar from "./BackBar";

function ContactDevis({ onClose }) {
  return (
    <div className={styles.mainContainer}>
      <BackBar onClose={onClose} />

      <div className={styles.content}>
        <p>Contact / Devis</p>
      </div>
    </div>
  );
}

export default ContactDevis;
