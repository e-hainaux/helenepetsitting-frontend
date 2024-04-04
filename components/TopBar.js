import React from "react";
import styles from "../styles/TopBar.module.css";
import Image from "next/image";

import mainPic from "../public/Images/HelenePic.jpg";

function TopBar() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.containerPhoto}>
        <Image
          className={styles.objectFit}
          src={mainPic}
          alt="Hélène Pet Sitting"
        />
      </div>
    </div>
  );
}

export default TopBar;
