import React from "react";
import styles from "../styles/LeftBar.module.css";
import Image from "next/image";

import cat from "../public/Images/cat.png";
import mouse from "../public/Images/mouse.png";
import chicken from "../public/Images/chicken.png";
import horse from "../public/Images/horse.png";
import parrot from "../public/Images/parrot.png";
import snake from "../public/Images/snake.png";

function LeftBar() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.chatschiens}>
        <Image src={cat} />
      </div>
      <div className={styles.rongeurs}>
        <Image src={mouse} />
      </div>
      <div className={styles.bassecour}>
        <Image src={chicken} />
      </div>
      <div className={styles.chevaux}>
        <Image src={horse} />
      </div>
      <div className={styles.oiseaux}>
        <Image src={parrot} />
      </div>
      <div className={styles.nac}>
        <Image src={snake} />
      </div>
    </div>
  );
}

export default LeftBar;
