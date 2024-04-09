import React from "react";
import Image from "next/image";
import styles from "../styles/Modal.module.css";
import NavBar from "./NavBar";

import cat from "../public/Images/cat.png";

function ChatsChiens({ onClose }) {
  return (
    <div className={styles.mainContainer}>
      <NavBar onClose={onClose} />

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
