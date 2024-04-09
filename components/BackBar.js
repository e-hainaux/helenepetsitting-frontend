import React, { useState } from "react";

import styles from "../styles/Modal.module.css";
import BackButton from "./BackButton";

const NavBar = ({ onClose }) => {
  return (
    <div className={styles.navBar}>
      <div className={styles.backBtnContainer}>
        <BackButton onClose={onClose} />
      </div>

      <div className={styles.freeSpace}></div>
    </div>
  );
};

export default NavBar;
