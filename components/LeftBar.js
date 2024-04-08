import React, { useState } from "react";
import styles from "../styles/LeftBar.module.css";
import Image from "next/image";
import ChatsChiens from "./ChatsChiens.js";
import Rongeurs from "./Rongeurs.js";
import BasseCour from "./BasseCour.js";
import Chevaux from "./Chevaux.js";
import Oiseaux from "./Oiseaux.js";
import NAC from "./NAC.js";

import cat from "../public/Images/cat.png";
import mouse from "../public/Images/mouse.png";
import chicken from "../public/Images/chicken.png";
import horse from "../public/Images/horse.png";
import parrot from "../public/Images/parrot.png";
import snake from "../public/Images/snake.png";

function LeftBar() {
  const [animalModal, setAnimalModal] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = (animal) => {
    console.log(`Vous avez cliqué sur l'image de ${animal}.`);
    setAnimalModal(animal);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const renderModalContent = () => {
    switch (animalModal) {
      case "chat":
        return <ChatsChiens onClose={handleCloseModal} />;
      case "souris":
        return <Rongeurs onClose={handleCloseModal} />;
      case "poulet":
        return <BasseCour onClose={handleCloseModal} />;
      case "cheval":
        return <Chevaux onClose={handleCloseModal} />;
      case "perroquet":
        return <Oiseaux onClose={handleCloseModal} />;
      case "serpent":
        return <NAC onClose={handleCloseModal} />;
      default:
        return null;
    }
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

      {/* Rendu conditionnel de la modale */}
      {isModalOpen && renderModalContent()}
    </div>
  );
}

export default LeftBar;
