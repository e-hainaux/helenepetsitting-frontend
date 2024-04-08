import React from "react";
import styles from "../styles/Modal.module.css";
import BackButton from "./BackButton";

function ContactDevis({ onClose }) {
  return (
    <div className={styles.mainContainer}>
      <BackButton onClose={onClose} />

      <div className={styles.content}>
        <p>Contact / Devis</p>
      </div>
    </div>
  );
}

export default ContactDevis;
