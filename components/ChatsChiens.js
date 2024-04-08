import React from "react";
import Image from "next/image";
import styles from "../styles/Modal.module.css";
import BackButton from "./BackButton";
import cat from "../public/Images/cat.png";

function ChatsChiens({ onClose }) {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.backBtnContainer}>
        <BackButton onClose={onClose} />
      </div>

      <div className={styles.content}>
        <div className={styles.chatschiens}>
          <Image className={styles.objectFit} src={cat} />
        </div>
        <div className={styles.txtContainer}>
          <p>CHATS & CHIENS</p>
        </div>
      </div>
    </div>
  );
}

export default ChatsChiens;
