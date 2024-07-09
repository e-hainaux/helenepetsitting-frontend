import React, { useEffect, useState, useRef } from "react";
import styles from "../styles/MainContent.module.css";
import Image from "next/image";
import UKflag from "../public/Images/UKflag.png";
import ContactButton from "./ContactButton";
import Bienvenue from "./Bienvenue";
import ScrollToTopButton from "./ScrollToTopButton";
import MesServices from "./MesServices";
import MesEngagements from "./MesEngagements";
import VosEngagements from "./VosEngagements";
import ContactDevis from "./ContactDevis";
import TopBar from "./TopBar";

function MainContent() {
  const txtContainerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isContactDevisOpen, setIsContactDevisOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = txtContainerRef.current.scrollTop;
      const isButtonVisible = scrollTop > 0;
      setIsVisible(isButtonVisible);
    };

    txtContainerRef.current.addEventListener("scroll", handleScroll);

    return () => {
      txtContainerRef.current.removeEventListener("scroll", handleScroll);
    };
  }, [isVisible]);

  // Fonction pour ouvrir le composant ContactDevis
  const handleContactDevisClick = () => {
    setIsContactDevisOpen(true);
  };

  // Fonction pour fermer le composant ContactDevis
  const handleCloseContactDevis = () => {
    setIsContactDevisOpen(false);
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.txtContainer} ref={txtContainerRef}>
        <TopBar className={styles.topBar} />
        <div className={styles.buttonsContainer}>
          <ContactButton onClick={handleContactDevisClick} />
          {/* <div className={styles.flagBtn}>
          <Image
            src={UKflag}
            className={styles.flagPic}
            c
            onClick={() => {
              console.log("Clic sur drapeau !");
            }}
          />
        </div> */}
        </div>
        <Bienvenue ref={txtContainerRef} />
        <ScrollToTopButton
          isVisible={isVisible}
          containerRef={txtContainerRef}
        />
        <MesServices />
        <MesEngagements />
        <VosEngagements />
        <div className={styles.avoidBackToTopButton}></div>
      </div>
      {isContactDevisOpen && <ContactDevis onClose={handleCloseContactDevis} />}
    </div>
  );
}

export default MainContent;
