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

function MainContent() {
  const txtContainerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      //   console.log("Je scrolle !");
      //   console.log("scrollTop valeur : " + txtContainerRef.current.scrollTop);
      const scrollTop = txtContainerRef.current.scrollTop;
      const isButtonVisible = scrollTop > 0; // Afficher si scrollé au-delà de 0
      setIsVisible(isButtonVisible);
    };

    txtContainerRef.current.addEventListener("scroll", handleScroll);

    return () => {
      txtContainerRef.current.removeEventListener("scroll", handleScroll);
    };
  }, [isVisible]);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.buttonsContainer}>
        <ContactButton />
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
      <div className={styles.txtContainer} ref={txtContainerRef}>
        <Bienvenue ref={txtContainerRef} />
        <ScrollToTopButton
          isVisible={isVisible}
          containerRef={txtContainerRef}
        />

        <MesServices />
        <MesEngagements />
        <VosEngagements />
      </div>
    </div>
  );
}

export default MainContent;
