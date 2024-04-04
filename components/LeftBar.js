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
  // Fonction pour gérer le clic sur chaque image
  const handleImageClick = (animal) => {
    console.log(`Vous avez cliqué sur l'image de ${animal}.`);
    // Ajoutez ici la logique pour ouvrir une modale ou effectuer d'autres actions en fonction de l'image cliquée
  };

  return (
    <div className={styles.mainContainer}>
      {/* Image de chat avec bouton cliquable */}
      <button
        onClick={() => handleImageClick("chat")}
        className={styles.imageButton}
      >
        <div className={styles.chatschiens}>
          <Image className={styles.objectFit} src={cat} />
        </div>
      </button>

      {/* Image de souris avec bouton cliquable */}
      <button
        onClick={() => handleImageClick("souris")}
        className={styles.imageButton}
      >
        <div className={styles.rongeurs}>
          <Image className={styles.objectFit} src={mouse} />
        </div>
      </button>

      {/* Image de poulet avec bouton cliquable */}
      <button
        onClick={() => handleImageClick("poulet")}
        className={styles.imageButton}
      >
        <div className={styles.bassecour}>
          <Image className={styles.objectFit} src={chicken} />
        </div>
      </button>

      {/* Image de cheval avec bouton cliquable */}
      <button
        onClick={() => handleImageClick("cheval")}
        className={styles.imageButton}
      >
        <div className={styles.chevaux}>
          <Image className={styles.objectFit} src={horse} />
        </div>
      </button>

      {/* Image de perroquet avec bouton cliquable */}
      <button
        onClick={() => handleImageClick("perroquet")}
        className={styles.imageButton}
      >
        <div className={styles.oiseaux}>
          <Image className={styles.objectFit} src={parrot} />
        </div>
      </button>

      {/* Image de serpent avec bouton cliquable */}
      <button
        onClick={() => handleImageClick("serpent")}
        className={styles.imageButton}
      >
        <div className={styles.nac}>
          <Image className={styles.objectFit} src={snake} />
        </div>
      </button>
    </div>
  );
}

export default LeftBar;
