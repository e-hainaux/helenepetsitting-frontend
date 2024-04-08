import React from "react";
import styles from "../styles/ContactButton.module.css";

const ContactButton = () => {
  return (
    <button
      disabled={false}
      className={styles.button}
      onClick={() => {
        console.log("Clic sur contact !");
      }}
    >
      Contact / Devis gratuit
    </button>
  );
};

export default ContactButton;
