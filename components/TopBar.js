import React from "react";
import styles from "../styles/TopBar.module.css";
import Image from "next/image";

import mainPic from "../public/Images/LogoHelene.png";

function TopBar() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.containerPhoto}>
        <Image
          className={styles.objectFit}
          src={mainPic}
          priority={true}
          alt="Hélène Pet Sitting"
        />
      </div>
    </div>
  );
}

export default TopBar;
