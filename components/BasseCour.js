import React from "react";
import Image from "next/image";

import styles from "../styles/Modal.module.css";
import NavBar from "./NavBar";

import chicken from "../public/Images/chicken.png";

function BasseCour({ onClose }) {
  return (
    <div className={styles.mainContainer}>
      <NavBar onClose={onClose} />

      <div className={styles.content}>
        <div className={styles.animalSection}>
          <div className={styles.animalImg}>
            <Image className={styles.objectFit} src={chicken} />
          </div>

          <div className={styles.txtContainer}>
            <h1>BASSE-COUR</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              ac ligula eget mi ullamcorper viverra. Duis sagittis lacus eget
              eros ultricies, ac ultricies nisi tincidunt. Nunc accumsan, risus
              sed aliquam placerat, sapien arcu sodales tellus, eu tincidunt
              nisi nisl nec lectus. Nam eget eros eu dui tincidunt tristique.
              Sed euismod, nisi eget feugiat pretium, tellus lectus tincidunt
              risus, in pulvinar enim eros eget quam. Fusce aliquam neque sit
              amet felis lacinia, ac ultricies nisi tristique.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BasseCour;
