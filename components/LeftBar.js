import React, { useState } from "react";
import styles from "../styles/LeftBar.module.css";
import Image from "next/image";
import Chiens from "./Chiens.js";
import Chats from "./Chats.js";
import BasseCour from "./BasseCour.js";
import Chevaux from "./Chevaux.js";
import Oiseaux from "./Oiseaux.js";
import NAC from "./NAC.js";

import dog from "../public/Images/dog.png";
import cat from "../public/Images/cat.png";
import nacGlobalPicto from "../public/Images/nacGlobalPicto.png";
import chicken from "../public/Images/chicken.png";

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
      case "chien":
        return <Chiens onClose={handleCloseModal} />;
      case "chat":
        return <Chats onClose={handleCloseModal} />;
      case "poule":
        return <BasseCour onClose={handleCloseModal} />;
      case "cheval":
        return <Chevaux onClose={handleCloseModal} />;
      case "perroquet":
        return <Oiseaux onClose={handleCloseModal} />;
      case "nac":
        return <NAC onClose={handleCloseModal} />;
      default:
        return null;
    }
  };

  return (
    <div className={styles.mainContainer}>
      {/* Image de chien avec bouton cliquable */}
      <button
        onClick={() => handleImageClick("chien")}
        className={styles.imageButton}
      >
        <div className={styles.chiens}>
          <Image className={styles.objectFitDog} src={dog} />
          <span className={styles.buttonText}>Chiens</span>
        </div>
      </button>

      {/* Image de chat avec bouton cliquable */}
      <button
        onClick={() => handleImageClick("chat")}
        className={styles.imageButton}
      >
        <div className={styles.chats}>
          <Image className={styles.objectFitCat} src={cat} />
          <span className={styles.buttonText}>Chats</span>
        </div>
      </button>

      {/* Image de groupe d'animaux N.A.C. avec bouton cliquable */}
      <button
        onClick={() => handleImageClick("nac")}
        className={styles.imageButton}
      >
        <div className={styles.nac}>
          <Image className={styles.objectFitGroup} src={nacGlobalPicto} />
          <span className={styles.buttonText}>N.A.C.</span>
        </div>
      </button>

      {/* Image de poule avec bouton cliquable */}
      <button
        onClick={() => handleImageClick("poule")}
        className={styles.imageButton}
      >
        <div className={styles.bassecour}>
          <Image className={styles.objectFitRescaled} src={chicken} />
          <span className={styles.buttonText}>Basse-cour</span>
        </div>
      </button>

      {/* Rendu conditionnel de la modale */}
      {isModalOpen && renderModalContent()}
    </div>
  );
}

export default LeftBar;
