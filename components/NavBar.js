import React, { useState } from "react";

import styles from "../styles/Modal.module.css";
import BackButton from "./BackButton";
import ContactButton from "./ContactButton";
import ContactDevis from "./ContactDevis";

const NavBar = ({ onClose }) => {
  const [isContactDevisOpen, setIsContactDevisOpen] = useState(false);

  // Fonction pour ouvrir le composant ContactDevis
  const handleContactDevisClick = () => {
    setIsContactDevisOpen(true);
  };

  // Fonction pour fermer le composant ContactDevis
  const handleCloseContactDevis = () => {
    setIsContactDevisOpen(false);
  };

  return (
    <div className={styles.navBar}>
      <div className={styles.backBtnContainer}>
        <BackButton onClose={onClose} />
      </div>

      <ContactButton onClick={handleContactDevisClick} />
      {isContactDevisOpen && <ContactDevis onClose={handleCloseContactDevis} />}
      <div className={styles.voidDiv}></div>
    </div>
  );
};

export default NavBar;
