import React from "react";
import styles from "../styles/BackButton.module.css";

const BackButton = ({ onClose }) => {
  return (
    <button className={styles.backButton} onClick={onClose}>
      BACK
    </button>
  );
};

export default BackButton;
