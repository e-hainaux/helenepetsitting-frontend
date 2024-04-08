import React from "react";
import styles from "../styles/Modal.module.css";
import BackButton from "./BackButton";

function ChatsChiens({ onClose }) {
  return (
    <div className={styles.mainContainer}>
      <BackButton onClose={onClose} />

      <div className={styles.content}>
        <p>CHATS & CHIENS</p>
      </div>
    </div>
  );
}

export default ChatsChiens;
